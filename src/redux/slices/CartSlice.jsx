import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
    name: "cart",
    initialState: {
        cart: [],
    },
    reducers: {
        addToCart: (state, action) => {
           //state.cart.puch(action.payload); 
           const existingItem = state.cart.find((item) => item.id === action.payload.id);
           if(existingItem){
            state.cart = state.cart.map(
                (item) => item.id === action.payload.id ? {...item, qty: item.qty+1}: item)
           } else {
            state.cart = [...state.cart, action.payload];
           }
        },
        removeFromCart: (state, action) => {
            state.cart = state.cart.filter((item) => item.id !== action.payload.id);
        },
        incrementQty : (state, action) => {
            state.cart = state.cart.map((item) => 
            item.id === action.payload.id ? {...item, qty: item.qty+1}: item);
        },
        decremenQty: (state, action) => {
            state.cart = state.cart.map((item) => 
            item.id === action.payload.id ? {...item, qty: item.qty-1} : item);
        }
    }
});

export const {addToCart, removeFromCart, incrementQty, decremenQty} = CartSlice.actions;
export default CartSlice.reducer;
