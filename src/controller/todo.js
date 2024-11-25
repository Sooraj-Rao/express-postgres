import prisma from "../prism.client.js";

export const CreateTodo = async (req, res) => {
  try {
    const { title, desc, priority, status, dueDate, userId } = req.body;
    console.log(req.body);
    const task = await prisma.task.create({
      data: {
        title,
        desc,
        priority: parseInt(priority),
        status,
        dueDate,
        userId: parseInt(userId),
      },
    });
    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const GetAllTodo = async (req, res) => {
  try {
    const tasks = await prisma.task.findMany({
      include: { user: true },
    });
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const UpdateTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, desc, priority, status, dueDate, categoryId } = req.body; // Expect categoryId instead of category

    const updateData = {};
    if (title !== undefined) updateData.title = title;
    if (desc !== undefined) updateData.desc = desc;
    if (priority !== undefined) updateData.priority = parseInt(priority);
    if (status !== undefined) updateData.status = status;
    if (dueDate !== undefined) updateData.dueDate = dueDate;

    if (categoryId !== undefined) {
      updateData.Category = { connect: { id: parseInt(categoryId) } };
    }

    const task = await prisma.task.update({
      where: { id: parseInt(id) },
      data: updateData,
    });

    res.json(task);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const DeleteTodo = async (req, res) => {
  try {
    const { id } = req.params;
    await prisma.task.delete({ where: { id: parseInt(id) } });
    res.status(204).send("done");
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
