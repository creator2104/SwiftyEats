import { configureStore} from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

const appStore = configureStore({
    // here we use reducer and this reducer can have multiple small reducers in slices and while exporting we have to export the reducer from each slice
    reducer: {
        // for each slice we have to add a reducer
        // here we can add the slices we have created
        cart : cartReducer,
    },
})

export default appStore;

// rtk library has things to do with redux so we imported configureStore from rtk library and to provide it into react we have to use Provider component from react-redux library it works as a bridge between react and redux