import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";
import { toast } from "react-toastify";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    // This function will be called when the "Add +" button is clicked
    // You can implement the logic to add the item to the cart here
    // For example, you might dispatch an action to add the item to the Redux store
    dispatch(addItem(item));
    // whenver you dispatch an action it will take whatever payload-("pizza") you have passed and it will create an object {payload:"pizza"} and it will pass as an second arguement in the reducer function action.payload
     // Show success toast
    toast.success(`${item.card.info.name} added to cart!`, {
      position: "top-right",
      autoClose: 1200,    // auto disappears in 1.2 seconds
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "light",
    });
  
    // const handleAddItem = (item) => {
    // dispatch(addItem(item));         //  Updates the Redux store
    // toast.success("Item added!");    //  Triggers Toastify popup
};
  return (
    <div>
      {items?.map((item) => (
        <div
          key={item.card.info.id}
          className="border-gray-200 border-b-2 text-left flex justify-between"
        >
          <div className="w-9/12 m-auto">
            <div className="py-2 font-semibold font-sans">
              <div className="text-gray-700">{item.card.info.name}</div>
              <div>
                ₹{" "}
                {item.card.info.price / 100 ||
                  item.card.info.defaultPrice / 100}
              </div>
            </div>
            <p className="font-serif text-gray-600 pb-2 pr-1">
              {item.card.info.description}
            </p>
          </div>
          <div className="w-3/12 my-4 relative">
            <img
              src={CDN_URL + item.card.info.imageId}
              className="w-full h-32 object-cover rounded"
               alt={item.card.info.name}
            />
            <button
              className="absolute bottom-2 left-1/2 transform -translate-x-1/2 px-4 py-1 bg-white shadow-md rounded-lg border border-green-400 text-sm cursor-pointer hover:bg-gray-100"
              onClick={() => handleAddItem(item)}
            >
              Add +
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ItemList;
