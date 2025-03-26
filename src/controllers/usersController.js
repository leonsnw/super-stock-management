const { Users } = require("../models");

// Criar usuario
exports.createUser = async (req, res) => {
  try {
    const { name, role, } = req.body;
    const users = await Users.create({ name, role });
    res.status(201).json(users);
  } catch (error) {
    res.status(500).json({ error: "Erro ao criar user" });
  }
};

// Listar todos os users
exports.getAllUsers = async (req, res) => {
  try {
    const users = await Users.findAll();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar usuarios" });
  }
};

// Atualizar user
exports.updateUsers = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, role } = req.body;
    const users = await Users.findByPk(id);

    if (!users) return res.status(404).json({ error: "User não encontrado" });

    await users.update({ name, role });
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: "Erro ao atualizar user" });
  }
};

// Remover user
exports.deleteUsers = async (req, res) => {
  try {
    const { id } = req.params;
    const users = await Users.findByPk(id);

    if (!users) return res.status(404).json({ error: "User não encontrado" });

    await users.destroy();
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: "Erro ao remover user" });
  }
};
