import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  order: [],
  isBasketShow: false,
  alertName: '',
};

const basketSlice = createSlice({
  name: '@@basket',
  initialState,
  reducers: {
    handleBasketShow: (state, action) => {
      state.isBasketShow = !state.isBasketShow;
    },
    addToBasket: (state, action) => {
      state.alertName = action.payload.name;
      const itemBasket = state.order.find((item) => item.id === action.payload.id);
      if (itemBasket) {
        itemBasket.quantity++;
      } else {
        state.order.push({ ...action.payload, quantity: 1 });
      }
    },

    removeFromBasket: (state, action) => {
      const removeItem = state.order.filter((item) => item.id !== action.payload);
      state.order = removeItem;
    },
    incQuantity: (state, action) => {
      const item = state.order.find((item) => item.id === action.payload);
      item.quantity++;
    },
    decQuantity: (state, action) => {
      const item = state.order.find((item) => item.id === action.payload);
      if (item.quantity === 1) {
        item.quantity = 1;
      } else {
        item.quantity--;
      }
    },
    closeAlert: (state, action) => {
      state.alertName = '';
    },
  },
});

export const {
  handleBasketShow,
  addToBasket,
  removeFromBasket,
  incQuantity,
  decQuantity,
  closeAlert,
} = basketSlice.actions;

export const basketReducer = basketSlice.reducer;

export const setOrder = (state) => state.basket.order;

export const setBasketShow = (state) => state.basket.isBasketShow;

export const setAlertName = (state) => state.basket.alertName;

