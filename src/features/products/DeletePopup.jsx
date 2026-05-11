export default function DeletePopup({ name, onConfirm, onCancel }) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-xl p-6 w-80">
        <h2 className="text-lg font-semibold text-gray-800 mb-2">Delete Product</h2>
        <p className="text-gray-600 text-sm mb-6">
          Are you sure you want to delete{" "}
          <span className="font-bold text-red-600">"{name}"</span>? This action cannot be undone.
        </p>
        <div className="flex justify-end gap-3">
          <button
            onClick={onCancel}
            className="px-4 py-2 text-sm rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100 transition-colors duration-250 cursor-pointer"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 text-sm rounded-lg bg-red-700 text-white hover:bg-red-600 transition-colors duration-250 cursor-pointer"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}