const { Product } = require("../models");

// Criar produto
exports.createProduct = async (req, res) => {
  try {
    const { name, price, quantity } = req.body;
    const product = await Product.create({ name, price, quantity });
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ error: "Erro ao criar produto" });
  }
};

// Listar todos os produtos
exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.findAll();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar produtos" });
  }
};

// Atualizar produto
exports.updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, price, quantity } = req.body;
    const product = await Product.findByPk(id);

    if (!product) return res.status(404).json({ error: "Produto não encontrado" });

    await product.update({ name, price, quantity });
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ error: "Erro ao atualizar produto" });
  }
};

// Remover produto
exports.deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByPk(id);

    if (!product) return res.status(404).json({ error: "Produto não encontrado" });

    await product.destroy();
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: "Erro ao remover produto" });
  }
};
