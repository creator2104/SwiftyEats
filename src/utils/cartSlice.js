import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name : "cart",
    // name of the slice 
    initialState : {
        items: [],
        // initial state of cart will be empty
    },
    reducers: {
        // addItem is like dispatch(action) 
        // action is like you add something to cart , remove to the cart or update the item of the cart
        // reducer function will modify the state based on the action 
        // the state is like the initialState we have defined above which is being updated by the reducer function
        // and the function is reduce function 
        addItem: (state , action) => {
        // this reducer function updates the cart-item or slice of the store   

        // we are mutating the state here
        // mutating the state means we are changing the state directly

        // vanila(older) redux - DON'T  MUTATE STATE , RETURNING WAS MANDATORY
        // earlier way 
        // const newState = [...state]
        // newState.items.push(action.payload)
        // return newState

        // redux toolkit
        // we have to mutate the state 
        // redux is still not mutating BTS
        // redux toolkit using immer library to do this 

        state.items.push(action.payload);

        // this will add the item to the cart
        // items is an array in the state and we are pushing the action.payload into it
        // payload is the data that we are sending to the reducer function
        },
        removeItem: (state) => {
            // this will remove the item from the cart
            state.items.pop();
            // pop will remove the last item from the array
        },
        clearCart: (state) => {
            // RTK - either you can mutate the state or return a new state
            // return [items:[]]
            // this new [items:[]] will be replaced inside originalstate = { items:[] }
            // state = [] dont do it , it will pass reference to it ❌
            // this will clear the cart 
            state.items.length = 0;
            // we are setting the items to an empty array
        }
    }
})

// exporting the actions so that we can use them in the components
export const { addItem, removeItem, clearCart } = cartSlice.actions;
// exporting the reducer so that we can use it in the store
export default cartSlice.reducer;