import React, { useState, useEffect } from 'react';
import api from '../services/api';

const ProductForm = ({ selectedProduct, onSaved }) => {
  const [form, setForm] = useState({
    name: '',
    price: '',
    quantity: ''
  });

  useEffect(() => {
    if (selectedProduct) {
      setForm(selectedProduct);
    } else {
      setForm({ name: '', price: '', quantity: '' });
    }
  }, [selectedProduct]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (form.id) {
        await api.put(`/products/${form.id}`, form);
      } else {
        await api.post('/products', form);
      }
      onSaved(); // Atualiza lista no App
      setForm({ name: '', price: '', quantity: '' });
    } catch (error) {
      console.error('Erro ao salvar produto:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{form.id ? '✏️ Editar Produto' : '🆕 Adicionar Produto'}</h2>
      <input
        name="name"
        placeholder="Nome"
        value={form.name}
        onChange={handleChange}
        required
      />
      <input
        name="price"
        placeholder="Preço"
        type="number"
        step="0.01"
        value={form.price}
        onChange={handleChange}
        required
      />
      <input
        name="quantity"
        placeholder="Quantidade"
        type="number"
        value={form.quantity}
        onChange={handleChange}
        required
      />
      <button type="submit">💾 Salvar</button>
    </form>
  );
};

export default ProductForm;
