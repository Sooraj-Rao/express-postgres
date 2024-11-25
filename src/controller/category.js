import prisma from "../prism.client.js";

export const CreateCategory = async (req, res) => {
  try {
    const { name } = req.body;
    const category = await prisma.category.create({ data: { name } });
    res.status(201).json(category);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const GetAllCategory = async (req, res) => {
  try {
    const categories = await prisma.category.findMany({
      include: { tasks: true },
    });
    res.json(categories);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
