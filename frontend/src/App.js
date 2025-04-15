import React, { useState } from 'react';
import ProductList from './components/ProductList';
import ProductForm from './components/ProductForm';

function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [refresh, setRefresh] = useState(false);

  const handleEdit = (product) => {
    setSelectedProduct(product);
  };

  const handleSaved = () => {
    setSelectedProduct(null);
    setRefresh(!refresh); // Força o ProductList a recarregar
  };

  return (
    <div className="App">
      <h1>📊 Gestão de Estoque</h1>
      <ProductForm selectedProduct={selectedProduct} onSaved={handleSaved} />
      <ProductList key={refresh} onEdit={handleEdit} />
    </div>
  );
}

export default App;
