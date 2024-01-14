import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../store';
import { Product } from '../../models/product.model';

type Cart = Product[];

const initialState: { cart: Cart } = {
  cart: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<Product>) {
      state.cart.push(action.payload);
    },
    deleteItem(state, action: PayloadAction<Product['id']>) {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
    increaseItemQuantity(state, action: PayloadAction<Product['id']>) {
      const item = state.cart.find((item) => item.id === action.payload);
      if (item) {
        item.quantity++;
        item.totalPrice = item.quantity * item.price;
      }
    },
    decreaseItemQuantity(state, action: PayloadAction<Product['id']>) {
      const item = state.cart.find((item) => item.id === action.payload);
      if (item) {
        item.quantity--;
        item.totalPrice = item.quantity * item.price;
      }

      if (item?.quantity === 0) {
        cartSlice.caseReducers.deleteItem(state, action);
      }
    },
    clearCart(state) {
      state.cart = [];
    },
  },
});

export const {
  addItem,
  deleteItem,
  increaseItemQuantity,
  decreaseItemQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;

export const getCart = (state: RootState) => state.cart.cart;

export const getCurrentQuantityById = (itemId: number) => (state: RootState) =>
  state.cart.cart.find((item) => item.id === itemId)?.quantity ?? 0;

export const getTotalCartPrice = (state: RootState) =>
  state.cart.cart.reduce((sum, item) => sum + item.totalPrice, 0);
