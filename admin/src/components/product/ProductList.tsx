import { useEffect, useState, useCallback } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {
  deleteProductAction,
  getProductsStart,
} from "../../features/slice/productSlice";
import { IProduct } from "../../interfaces/product";
import TableHeader from "./TableHeader";
import PaginationTable from "./PaginationTable";
import Swal from "sweetalert2";
import productApi from "../../api/modules/productApi";
import { useNavigate } from "react-router-dom";
import ProductItem from "./ProductItem";

const ProductList = () => {
  const dispatch = useAppDispatch();
  const { products, loading } = useAppSelector((state) => state.product);
  const [q, setQ] = useState<string>("");
  const navigate = useNavigate();
  const [itemsPerPage, setItemsPerPage] = useState<number>(10);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    dispatch(getProductsStart());
  }, [dispatch]);

  const searchByName = useCallback(
    (data: IProduct[]) => {
      return data.filter((item, index) => {
        return item.name.toString().toLowerCase().indexOf(q.toLowerCase()) > -1;
      });
    },
    [q]
  );

  const start = itemsPerPage * (currentPage - 1);
  const finish = itemsPerPage * currentPage;

  const dataProducts = searchByName(products);
  const totalPages = Math.ceil(dataProducts.length / itemsPerPage);
  const totalItems = dataProducts.length;

  const nextPage = () => {
    currentPage < totalPages && setCurrentPage(currentPage + 1);
  };

  const previousPage = () => {
    currentPage > 1 && setCurrentPage(currentPage - 1);
  };

  const delProduct = (id: string) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Waiting!",
          html: "Your file is deleting.",
          didOpen: () => {
            // `MySwal` is a subclass of `Swal` with all the same instance & static methods
            Swal.showLoading();
            productApi
              .deleteProduct(id)
              .then((res) => {
                if (res.status === 200) {
                  dispatch(deleteProductAction(id));
                  Swal.fire(
                    "Deleted!",
                    "Your file has been deleted.",
                    "success"
                  );
                }
              })
              .catch((err) => {
                Swal.fire("Deleted!", `Error is ${err}.`, "error");
              });
          },
        });
      }
    });
  };

  const editProduct = (id: string) => {
    navigate(`edit/${id}`);
  };


  const renderProductList = () => {

    
    if (loading) {
      return (
        <tr className="animate-pulse bg-white dark:bg-gray-800 dark:border-gray-700">
          <th scope="row" colSpan={7} className="px-6 py-4 text-center">
            Loading ...
          </th>
        </tr>
      );
    } else if (dataProducts.length > 0) {
      return dataProducts.slice(start, finish).map((product) => {
        return (
          <ProductItem
            key={product._id}
            product={product}
            delProduct={delProduct}
            editProduct={editProduct}
          />
        );
      });
    } else {
      return (
        <tr className="bg-white dark:bg-gray-800 dark:border-gray-700">
          <th scope="row" colSpan={7} className="px-6 py-4 text-center">
            No products found
          </th>
        </tr>
      );
    }
  };

  return (
    <>
      <div className="relative shadow-md rounded-md sm:rounded-lg overflow-hidden">
        <TableHeader setQ={setQ} setCurrentPage={setCurrentPage} />
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                  Product name
                </th>
                <th scope="col" className="px-6 py-3">
                  <div className="flex items-center">
                    Category
                    <button type="button" title="button">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-3 h-3 ml-1"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 320 512"
                      >
                        <path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z" />
                      </svg>
                    </button>
                  </div>
                </th>
                <th scope="col" className="px-6 py-3">
                  <div className="flex items-center">
                    Stock
                    <button type="button" title="button">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-3 h-3 ml-1"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 320 512"
                      >
                        <path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z" />
                      </svg>
                    </button>
                  </div>
                </th>
                <th scope="col" className="px-6 py-3">
                  Company
                </th>
                <th scope="col" className="px-6 py-3">
                  <div className="flex items-center">
                    Price
                    <button type="button" title="button">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-3 h-3 ml-1"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 320 512"
                      >
                        <path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z" />
                      </svg>
                    </button>
                  </div>
                </th>
                <th scope="col" className="px-6 py-3">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody>{renderProductList()}</tbody>
          </table>
        </div>
      </div>
      <PaginationTable
        start={start}
        finish={finish}
        currentPage={currentPage}
        nextPage={nextPage}
        previousPage={previousPage}
        totalPages={totalPages}
        totalItems={totalItems}
        setCurrentPage={setCurrentPage}
        setItemsPerPage={setItemsPerPage}
      />
    </>
  );
};

export default ProductList;
