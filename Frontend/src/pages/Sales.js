import React, { useState, useEffect, useContext } from "react";
import AddSale from "../components/AddSale";
import AuthContext from "../AuthContext";

function Sales() {
  const [showSaleModal, setShowSaleModal] = useState(false);
  const [sales, setAllSalesData] = useState([]);
  const [products, setAllProducts] = useState([]);
  const [stores, setAllStores] = useState([]);
  const [updatePage, setUpdatePage] = useState(true);

  const authContext = useContext(AuthContext);

  useEffect(() => {
    fetchSalesData();
    fetchProductsData();
    fetchStoresData();
  }, [updatePage]);

  // Buscar dados de todas as vendas
  const fetchSalesData = () => {
    fetch(`http://localhost:4000/api/sales/get/${authContext.user}`)
      .then((response) => response.json())
      .then((data) => {
        setAllSalesData(data);
      })
      .catch((err) => console.log(err));
  };

  // Buscar dados de todos os produtos
  const fetchProductsData = () => {
    fetch(`http://localhost:4000/api/product/get/${authContext.user}`)
      .then((response) => response.json())
      .then((data) => {
        setAllProducts(data);
      })
      .catch((err) => console.log(err));
  };

  // Buscar dados de todas as lojas
  const fetchStoresData = () => {
    fetch(`http://localhost:4000/api/store/get/${authContext.user}`)
      .then((response) => response.json())
      .then((data) => {
        setAllStores(data);
      });
  };

  // Modal para adicionar venda
  const addSaleModalSetting = () => {
    setShowSaleModal(!showSaleModal);
  };

  // Atualizar página
  const handlePageUpdate = () => {
    setUpdatePage(!updatePage);
  };

  return (
    <div className="col-span-12 lg:col-span-10 flex justify-center">
      <div className="flex flex-col gap-5 w-11/12">
        {showSaleModal && (
          <AddSale
            addSaleModalSetting={addSaleModalSetting}
            products={products}
            stores={stores}
            handlePageUpdate={handlePageUpdate}
            authContext={authContext}
          />
        )}
        {/* Tabela */}
        <div className="overflow-x-auto rounded-lg border bg-white border-gray-200">
          <div className="flex justify-between pt-5 pb-3 px-3">
            <div className="flex gap-4 justify-center items-center">
              <span className="font-bold">Vendas</span>
            </div>
            <div className="flex gap-4">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold p-2 text-xs rounded"
                onClick={addSaleModalSetting}
              >
                Adicionar Venda
              </button>
            </div>
          </div>
          <table className="min-w-full divide-y-2 divide-gray-200 text-sm">
            <thead>
              <tr>
                <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                  Nome do Produto
                </th>
                <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                  Nome da Loja
                </th>
                <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                  Estoque Vendido
                </th>
                <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                  Data da Venda
                </th>
                <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                  Valor Total
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-200">
              {sales.map((element, index) => {
                return (
                  <tr key={element._id}>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-900">
                      {element.ProductID?.name}
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                      {element.StoreID?.name}
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                      {element.StockSold}
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                      {new Date(element.SaleDate).toLocaleDateString('pt-BR')}
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                      R${element.TotalSaleAmount}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Sales;