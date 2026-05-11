import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  list: [],
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    //
    addProduct: {
      reducer(state, action) {
        state.list.push(action.payload);
      },
      prepare(product) {
        return { payload: { ...product, id: nanoid() } };
      },
    },
    updateProduct(state, action) {
      const idx = state.list.findIndex((p) => p.id === action.payload.id); //
      if (idx !== -1) {
        state.list[idx] = action.payload;
      }
    },
    removeProduct: (state, action) => {
      state.list = state.list.filter((p) => p.id !== action.payload);
    },
  },
});

export const { addProduct, updateProduct, removeProduct } = productSlice.actions;
export default productSlice.reducer;
