import { CDN_URL } from "../utils/constants";

const ItemList = ({ items , dummy }) => {
  return (
    <div>
      {items?.map((item) => (
        <div key={item.card.info.id} className="border-gray-200 border-b-2 text-left flex justify-between"  >
        <div className="w-9/12 m-auto">
            <div className="py-2 font-semibold font-sans">
              <div className="text-gray-700">{item.card.info.name}</div>
              <div>₹ {item.card.info.price / 100 || item.card.info.defaultPrice / 100}</div>
            </div>
            <p className="font-serif text-gray-600">{item.card.info.description}</p>
          </div>
          <div className="w-3/12 my-4 relative">
            <img src={CDN_URL + item.card.info.imageId} className="w-full h-32 object-cover rounded"/>
            <button className="absolute bottom-2 left-1/2 transform -translate-x-1/2 px-4 py-1 bg-white shadow-md rounded-lg border border-green-400 text-sm hover:bg-gray-100">Add +</button>
          </div>
        </div>
      ))}
    </div>
  );
};
export default ItemList;
