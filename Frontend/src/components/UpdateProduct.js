import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { PlusIcon } from "@heroicons/react/24/outline";

export default function UpdateProduct({
  updateProductData,
  updateModalSetting,
}) {
  const { _id, name, manufacturer, description } = updateProductData;
  const [product, setProduct] = useState({
    productID: _id,
    name: name,
    manufacturer: manufacturer,
    description: description,
  });
  const [open, setOpen] = useState(true);
  const cancelButtonRef = useRef(null);

  const handleInputChange = (key, value) => {
    console.log(key);
    setProduct({ ...product, [key]: value });
  };

  const updateProduct = () => {
    fetch("http://localhost:4000/api/product/update", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((result) => {
        alert("Produto Atualizado");
        setOpen(false);
      })
      .catch((err) => console.log(err));
  };

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={cancelButtonRef}
        onClose={setOpen}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 sm:mx-0 sm:h-10 sm:w-10">
                      <PlusIcon
                        className="h-6 w-6 text-blue-400"
                        aria-hidden="true"
                      />
                    </div>
                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left ">
                      <Dialog.Title
                        as="h3"
                        className="text-lg font-semibold leading-6 text-gray-900 "
                      >
                        Atualizar Produto
                      </Dialog.Title>
                      <form action="#">
                        <div className="grid gap-4 mb-4 sm:grid-cols-2">
                          <div>
                            <label
                              htmlFor="name"
                              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                              Nome
                            </label>
                            <input
                              type="text"
                              name="name"
                              id="name"
                              value={product.name}
                              onChange={(e) =>
                                handleInputChange(e.target.name, e.target.value)
                              }
                              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                              placeholder="Ex. Apple iMac 27&ldquo;"
                            />
                          </div>
                          <div>
                            <label
                              htmlFor="manufacturer"
                              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                              Fabricante
                            </label>
                            <input
                              type="text"
                              name="manufacturer"
                              id="manufacturer"
                              value={product.manufacturer}
                              onChange={(e) =>
                                handleInputChange(e.target.name, e.target.value)
                              }
                              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                              placeholder="Ex. Apple"
                            />
                          </div>
                          <div className="sm:col-span-2">
                            <label
                              htmlFor="description"
                              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                              Descrição
                            </label>
                            <textarea
                              id="description"
                              rows="5"
                              name="description"
                              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                              placeholder="Escreva uma descrição..."
                              value={product.description}
                              onChange={(e) =>
                                handleInputChange(e.target.name, e.target.value)
                              }
                            >
                              Vidro padrão, processador Intel Core i7 de 10ª geração com 8 núcleos e 3.8GHz, Turbo Boost de até 5.0GHz, 16GB de memória DDR4 de 2666MHz, Radeon Pro 5500 XT com 8GB de memória GDDR6, armazenamento SSD de 256GB, Ethernet Gigabit, Magic Mouse 2, Magic Keyboard - US
                            </textarea>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                  <button
                    type="button"
                    className="inline-flex w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 sm:ml-3 sm:w-auto"
                    onClick={updateProduct}
                  >
                    Atualizar Produto
                  </button>
                  <button
                    type="button"
                    className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                    onClick={() => updateModalSetting()}
                    ref={cancelButtonRef}
                  >
                    Cancelar
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}