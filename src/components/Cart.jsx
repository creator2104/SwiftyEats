import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  // whenever you do a selector make sure you are using right portion of the store if you dont use the right portion of the store it will make big performance loss
  const cartItems  = useSelector((store) => store.cart.items);
  // the name selector is bcz of u r using a small portion of the store
  
  // const store = useSelector((store) => store);
  // const cartItems = store.cart.items;
  // above code will reduce the performance of the application because it will select the whole store and then we are using only cart portion of the store so it will make a big performance loss

  const dispatch = useDispatch(); 
  const handleClearCart = () => {
    dispatch(clearCart())
  }

  return (
    <div className="text-center m-4 p-4">
      <h1 className="text-2xl font-bold">Cart</h1>
      <div className="w-6/12 m-auto mt-4">
        <button className="p-2 m-4 bg-black text-white rounded-lg" onClick={handleClearCart}>Clear Cart</button>
        {cartItems.length === 0 && (<h1>Cart is empty . Add items to the cart!</h1>)}
        <ItemList items ={cartItems} />
      </div>
    </div>
  )
}

export default Cart