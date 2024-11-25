import bcrypt from "bcryptjs";
import prisma from "../prism.client.js";

export const Register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const hasPass = await bcrypt.hash(password, 10);
    const user = await prisma.user.create({
      data: { name, email, password: hasPass },
    });
    res.status(200).json({ message: "Registration successful", user });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const Login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      return res.status(400).json({ error: "!user" });
    }

    const comparePass = await bcrypt.compare(password, user.password);
    if (!comparePass) {
      return res.status(400).json({ error: "Password !match" });
    }
    res.cookie("user", user.email);
    res.status(200).json({ message: "Login successful", user });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const GetAllUser = async (req, res) => {
  try {
    const users = await prisma.user.findMany({ include: { tasks: true } });
    res.status(200).json({ message: "Success", count: users.length, users });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const GetOneUser = async (req, res) => {
  try {
    const { id } = req.params;
    const users = await prisma.user.findUnique({
      where: { id: parseInt(id) },
      include: { tasks: true },
    });
    res.status(200).json({ message: "Success", users });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
