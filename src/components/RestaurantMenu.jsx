// import { MENU_CARD_API } from "../utils/constants";
// import useRestaurantMenu from "../utils/useRestaurantMenu";
// import { Shimmer } from "./Shimmer";
// import { useParams } from "react-router";
// // why custom hooks is being used
// // custom hooks make your code more readable, moduler and reusable
// // there are two responsibilities of restaurantMenu first is fetching the data and second is displaying the data on the UI
// // to decrease its responsibility of how the data is coming custom hooks is being used over here

// const RestaurantMenu = () => {
//   const { resId } = useParams();
//   // useparams give us resId
//   const resInfo = useRestaurantMenu(resId);

//   if (resInfo === null) return <Shimmer />;

//   const restaurantInfo = resInfo?.cards?.[2]?.card?.card?.info;

//   // const  { itemCards } =resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]?.card?.card || {};

//   console.log( resInfo?.cards?.[4].groupedCard?.cardGroupMap?.REGULAR?.cards);

//   const categories = resInfo?.cards?.[4].groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c => c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")

//   console.log(categories);

//   // from this data we can make accordion of categories

//   return (
//     <div className="max-w-4xl mx-auto my-6 px-4">
//       {/* Restaurant Info */}
//       <div className="bg-white rounded-2xl shadow p-6">
//         <h1 className="text-3xl font-bold text-gray-800 mb-2">
//           {restaurantInfo?.name || "Restaurant Name Not Found"}
//         </h1>
//         <p className="text-lg text-gray-600 mb-1">
//           {restaurantInfo?.cuisines?.join(", ") || "Cuisines not found"}
//         </p>
//         <p className="text-gray-500 mb-1">
//           {restaurantInfo?.costForTwoMessage || "Cost info not found"}
//         </p>
//         <p className="text-yellow-600 font-medium mb-1">
//           ⭐ {restaurantInfo?.avgRating} ({restaurantInfo?.totalRatingsString})
//         </p>
//         <p className="text-gray-500 mb-1">
//           {restaurantInfo?.areaName}, {restaurantInfo?.city}
//         </p>
//         <p className="text-gray-500">
//           ⏱ {restaurantInfo?.sla?.deliveryTime} minutes
//         </p>
//       </div>

//       {/* Menu Section */}
//       <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Menu</h2>
//       <ul className="grid gap-4 sm:grid-cols-1 md:grid-cols-2">
//         {itemCards?.map((item) => {
//           const info = item.card.info;
//           const price = info.price || info.defaultPrice;

//           return (
//             <li
//               key={info.id}
//               className="bg-white border border-gray-200 rounded-xl shadow hover:shadow-md p-4 transition-all duration-200"
//             >
//               <div className="flex justify-between items-start">
//                 <div>
//                   <h3 className="text-lg font-semibold text-gray-800">
//                     {info.name}
//                   </h3>
//                   {price ? (
//                     <p className="text-sm text-gray-600 mt-1">₹{price / 100}</p>
//                   ) : (
//                     <p className="text-sm text-gray-400 italic mt-1">
//                       Price not available
//                     </p>
//                   )}
//                 </div>
//                 {info.imageId && (
//                   <img
//                     src={MENU_CARD_API + `${info.imageId}`}
//                     className="w-20 h-20 object-cover rounded-md ml-4"
//                     alt={info.name}
//                   />
//                 )}
//               </div>
//             </li>
//           );
//         })}
//       </ul>
//     </div>
//   );
// };

// export default RestaurantMenu;

import { useState } from "react";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import Restaurantcategory from "./Restaurantcategory";
import { Shimmer } from "./Shimmer";
import { useParams } from "react-router-dom";
 
const RestaurantMenu = () => {   
  const { resId } = useParams();

  const dummy = "Dummy Data";

  const resInfo = useRestaurantMenu(resId);

  const [showIndex, setShowIndex] = useState(null);

  if (resInfo === null) return <Shimmer />;

  // const { itemCards } =
  //   resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]?.card?.card || {};

 const regularCards = resInfo?.cards?.find(
  (card) => card?.groupedCard
)?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];

const categories = regularCards.filter(
  (c) =>
    c.card?.card?.["@type"] ===
    "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
);

 const restaurantInfo = resInfo?.cards?.find(
  (c) => c?.card?.card?.info
)?.card?.card?.info;

  return (
    <div className="menu text-center">
      <h1 className="font-bold my-6 text-2xl">
        {restaurantInfo?.name || "Restaurant Name Not Found"}
      </h1>
      <p className="font-bold text-lg">
        {restaurantInfo?.cuisines?.join(", ") || "Cuisines not found"}
      </p>
      {/* categories accordions */}
      {/* each accordian have a header and a body which can be collapse */}
      {categories.map((category,index) => (
        // controlled component
        <Restaurantcategory
          key={category?.card?.card?.title}
          data={category?.card?.card}
          ShowItems={index === showIndex ? true : false}
          setShowIndex={() => setShowIndex(index === showIndex ? null : index)}
          dummy={dummy}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;

// Prop drilling is when you pass data (props) from a parent component down to deeply nested child components, even if some intermediate components don’t use that data — they just pass it along. It’s common in React but can make your code harder to manage, especially as your app grows.

// react context is a way to share values (like data or functions) between components without having to pass props through every level of the component tree. It allows you to create a global state that can be accessed by any component that needs it, making your code cleaner and easier to maintain.