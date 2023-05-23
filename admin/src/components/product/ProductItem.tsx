import { IProduct } from "../../interfaces/product";

interface ProductItemProps {
  product: IProduct;
  delProduct: (id: string) => void;
  editProduct: (id: string) => void;
}

const ProductItem = ({
  product,
  delProduct,
  editProduct,
}: ProductItemProps) => {
  const handleEdit = () => {
    editProduct(product._id);
  };

  const handleDelete = () => {
    delProduct(product._id);
  };

  return (
    <tr
      className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 "
      key={product.name}
    >
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white capitalize"
      >
        {product.name}
      </th>

      <td className="px-6 py-4">{product.category}</td>
      <td className="px-6 py-4">{product.inventory}</td>

      <td className="px-6 py-4">{product.company}</td>
      <td className="px-6 py-4">${product.price.toLocaleString()}</td>
      <td
        className="px-6 py-4 text-right whitespace-nowrap
"
      >
        <button
          type="button"
          className="text-white  bg-blue-700 hover:bg-blue-800  focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          onClick={handleEdit}
        >
          <svg
            className="w-5 h-5 mr-2 -ml-1"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"></path>
            <path
              fillRule="evenodd"
              d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
              clipRule="evenodd"
            ></path>
          </svg>
          Edit item
        </button>
        <button
          type="button"
          className="text-white  bg-red-700 hover:bg-red-800  focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center mr-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
          onClick={handleDelete}
        >
          <svg
            className="w-5 h-5 mr-2 -ml-1"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
              clipRule="evenodd"
            />
          </svg>
          Delete item
        </button>
      </td>
    </tr>
  );
};

export default ProductItem;
