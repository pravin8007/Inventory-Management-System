import React from "react";

export default function MaterialRow({ material, index, onChange }) {
  const handleChange = (field, value) => {
    onChange(index, field, value);
  };

  return (
    <div className="bg-gray-700 p-3 rounded-md">

      <div className="hidden md:grid md:grid-cols-8 gap-3 items-center">
        <input
          type="text"
          placeholder="Material Name"
          value={material.name}
          onChange={(e) => handleChange("name", e.target.value)}
          className="col-span-2 px-2 py-1 rounded-md bg-gray-600 border border-gray-500 text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
        />
        <select
          value={material.unit}
          onChange={(e) => handleChange("unit", e.target.value)}
          className="px-2 py-1 rounded-md bg-gray-600 border border-gray-500 text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
        >
          <option>kg</option>
          <option>gm</option>
          <option>ltr</option>
          <option>ml</option>
          <option>box</option>
          <option>units</option>
        </select>
        <input
          type="number"
          placeholder="Qty"
          value={material.quantity}
          onChange={(e) => handleChange("quantity", e.target.value)}
          className="px-2 py-1 rounded-md bg-gray-600 border border-gray-500 text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
        />
        <input
          type="number"
          placeholder="Price"
          value={material.price}
          onChange={(e) => handleChange("price", e.target.value)}
          className="px-2 py-1 rounded-md bg-gray-600 border border-gray-500 text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
        />
        <span className="px-2 py-1 text-white text-sm">{material.totalPrice.toFixed(2)}</span>
        <span className="px-2 py-1 text-white text-sm">{material.tax.toFixed(2)}</span>
        <span className="px-2 py-1 text-white text-sm">{material.totalAmount.toFixed(2)}</span>
      </div>

      <div className="md:hidden space-y-3">

        <input
          type="text"
          placeholder="Material Name"
          value={material.name}
          onChange={(e) => handleChange("name", e.target.value)}
          className="w-full px-2 py-2 rounded-md bg-gray-600 border border-gray-500 text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 text-sm"
        />

        {/* Unit + Qty + Price in a row */}
        <div className="grid grid-cols-3 gap-2">
          <div className="flex flex-col gap-1">
            <label className="text-xs text-gray-400">Unit</label>
            <select
              value={material.unit}
              onChange={(e) => handleChange("unit", e.target.value)}
              className="px-2 py-2 rounded-md bg-gray-600 border border-gray-500 text-white text-sm focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
            >
              <option>kg</option>
              <option>gm</option>
              <option>ltr</option>
              <option>ml</option>
              <option>box</option>
              <option>units</option>
            </select>
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-xs text-gray-400">Qty</label>
            <input
              type="number"
              placeholder="0"
              value={material.quantity}
              onChange={(e) => handleChange("quantity", e.target.value)}
              className="px-2 py-2 rounded-md bg-gray-600 border border-gray-500 text-white text-sm focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-xs text-gray-400">Price</label>
            <input
              type="number"
              placeholder="0"
              value={material.price}
              onChange={(e) => handleChange("price", e.target.value)}
              className="px-2 py-2 rounded-md bg-gray-600 border border-gray-500 text-white text-sm focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
            />
          </div>
        </div>

        <div className="grid grid-cols-3 gap-2 border-t border-gray-600 pt-2">
          <div className="text-center">
            <p className="text-xs text-gray-400 mb-0.5">Total Price</p>
            <p className="text-white text-sm font-medium">₹{material.totalPrice.toFixed(2)}</p>
          </div>
          <div className="text-center">
            <p className="text-xs text-gray-400 mb-0.5">Tax</p>
            <p className="text-white text-sm font-medium">₹{material.tax.toFixed(2)}</p>
          </div>
          <div className="text-center">
            <p className="text-xs text-gray-400 mb-0.5">Total Amount</p>
            <p className="text-white text-sm font-medium">₹{material.totalAmount.toFixed(2)}</p>
          </div>
        </div>

      </div>
    </div>
  );
}