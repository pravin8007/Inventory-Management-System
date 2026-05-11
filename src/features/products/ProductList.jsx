import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { removeProduct } from "./productSlice";
import { useDispatch } from "react-redux";
import { MdEdit, MdDelete } from "react-icons/md";
import { useState } from "react";
import DeletePopup from "./DeletePopup";

export default function ProductList() {
  const [deleteTarget, setDeleteTarget] = useState(null);
  const products = useSelector((state) => state.products.list);
  const dispatch = useDispatch();

  if (!products || products.length === 0) {
    return (
      <div className="text-center py-12 text-gray-500">
        No products found. Add one to get started.
      </div>
    );
  }

  const handleDelete = () => {
    dispatch(removeProduct(deleteTarget.id));
    setDeleteTarget(null);
  };

  return (
    <>
      {deleteTarget && (
        <DeletePopup
          name={deleteTarget.name}
          onConfirm={handleDelete}
          onCancel={() => setDeleteTarget(null)}
        />
      )}

      <div className="hidden md:block overflow-x-auto rounded-lg border border-gray-300 bg-white">
        <table className="w-full text-left border-collapse">
          <thead className="bg-gray-800">
            <tr>
              <th className="px-5 py-3 text-white">Product Name</th>
              <th className="px-5 py-3 text-white">Category</th>
              <th className="px-5 py-3 text-white">Total Cost (₹)</th>
              <th className="px-5 py-3 text-white">Materials</th>
              <th className="px-5 py-3 text-white text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr
                key={product.id}
                className={`border-b ${
                  index % 2 === 0 ? "bg-gray-50" : "bg-gray-100"
                } hover:bg-gray-200`}
              >
                <td className="px-5 py-3 font-medium text-blue-600">
                  <Link to={`/edit/${product.id}`}>{product.productName}</Link>
                </td>
                <td className="px-5 py-3 text-gray-700">
                  {product.productCategory || "-"}
                </td>
                <td className="px-5 py-3 text-gray-900 font-semibold">
                  ₹{product.totalCost?.toFixed(2) || "0.00"}
                </td>
                <td className="px-5 py-3 text-gray-700">
                  {product.rawMaterials.length || 0}
                </td>
                <td className="px-5 py-3 text-center">
                  <Link to={`/edit/${product.id}`}>
                    <button className="mr-2 px-4 py-2 text-sm text-white bg-blue-800 rounded hover:bg-blue-400 hover:text-blue-900 transition-colors duration-200">
                      <MdEdit />
                    </button>
                  </Link>
                  <button
                    onClick={() =>
                      setDeleteTarget({ id: product.id, name: product.productName })
                    }
                    className="px-4 py-2 text-sm text-white bg-red-800 rounded hover:bg-red-300 hover:text-red-900 transition-colors duration-200"
                  >
                    <MdDelete />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="md:hidden flex flex-col gap-3">
        {products.map((product, index) => (
          <div
            key={product.id}
            className={`${
              index % 2 === 0 ? "bg-gray-100" : "bg-gray-200"
            } active:bg-gray-300 border rounded-lg shadow-sm p-4`}
          >

            <div className="flex items-start justify-between gap-2 mb-3">
              <Link
                to={`/edit/${product.id}`}
                className="text-base font-semibold text-blue-600 hover:text-blue-800 leading-tight"
              >
                {product.productName}
              </Link>
              <div className="flex gap-2 shrink-0">
                <Link to={`/edit/${product.id}`}>
                  <button className="p-2 text-white bg-blue-800 rounded hover:bg-blue-400 hover:text-blue-900 transition-colors duration-200">
                    <MdEdit size={16} />
                  </button>
                </Link>
                <button
                  onClick={() =>
                    setDeleteTarget({ id: product.id, name: product.productName })
                  }
                  className="p-2 text-white bg-red-800 rounded hover:bg-red-300 hover:text-red-900 transition-colors duration-200"
                >
                  <MdDelete size={16} />
                </button>
              </div>
            </div>


            <div className="grid grid-cols-3 gap-2 text-sm">
              <div className="bg-gray-50 rounded p-2">
                <p className="text-xs text-gray-400 mb-0.5">Category</p>
                <p className="text-gray-700 font-medium truncate">
                  {product.productCategory || "-"}
                </p>
              </div>
              <div className="bg-gray-50 rounded p-2">
                <p className="text-xs text-gray-400 mb-0.5">Total Cost</p>
                <p className="text-gray-900 font-semibold">
                  ₹{product.totalCost?.toFixed(2) || "0.00"}
                </p>
              </div>
              <div className="bg-gray-50 rounded p-2">
                <p className="text-xs text-gray-400 mb-0.5">Materials</p>
                <p className="text-gray-700 font-medium">
                  {product.rawMaterials.length || 0}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}