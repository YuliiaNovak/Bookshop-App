import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   items: [],
   totalAmount: 0,
   changed: false,
};

const cartSlice = createSlice({
   name: "cart",
   initialState,
   reducers: {
      replaceCart(state, action) {
         state.totalAmount = action.payload.totalAmount;
         state.items = action.payload.items;
      },
      addItem(state, action) {
         const newItem = action.payload;
         const existingItem = state.items.find(
            (item) => item.id === newItem.id
         );
         state.totalAmount++;
         state.changed = true;
         if (existingItem) {
            existingItem.amount++;
            existingItem.totalPrice = existingItem.totalPrice + newItem.price;
         } else {
            state.items.push({
               id: newItem.id,
               title: newItem.title,
               price: newItem.price,
               amount: 1,
               totalPrice: newItem.price,
            });
         }
      },
      deleteItem(state, action) {
         const id = action.payload;
         const existingItem = state.items.find((item) => item.id === id);
         state.totalAmount--;
         state.changed = true;
         if (existingItem.amount === 1) {
            state.items = state.items.filter((item) => item.id !== id);
         } else {
            existingItem.amount--;
            existingItem.totalPrice =
               existingItem.totalPrice - existingItem.price;
         }
      },
      clearCart(state) {},
   },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
