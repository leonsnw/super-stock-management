import React, { useEffect, useState } from 'react';
import api from '../services/api';

const ProductList = ({ onEdit }) => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const response = await api.get('/products');
      setProducts(response.data);
    } catch (error) {
      console.error('Erro ao buscar produtos:', error);
    }
  };

  const deleteProduct = async (id) => {
    try {
      await api.delete(`/products/${id}`);
      fetchProducts(); // Atualiza lista
    } catch (error) {
      console.error('Erro ao deletar produto:', error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <h2>📦 Produtos em Estoque</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} — R${product.price} — Qtd: {product.quantity}
            <button onClick={() => onEdit(product)}>✏️</button>
            <button onClick={() => deleteProduct(product.id)}>🗑️</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
