import { MENU_CARD_API } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { Shimmer } from "./Shimmer";
import { useParams } from "react-router";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <Shimmer />;

  const restaurantInfo = resInfo?.cards?.[2]?.card?.card?.info;

  // const  { itemCards } =resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]?.card?.card || {};

  const itemCards = resInfo?.cards?.find((card) => card.groupedCard)
    ?.groupedCard?.cardGroupMap?.REGULAR?.cards.find((c) => c.card?.card?.itemCards).card?.card?.itemCards;

  return (
    <div className="max-w-4xl mx-auto my-6 px-4">
      {/* Restaurant Info */}
      <div className="bg-white rounded-2xl shadow p-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          {restaurantInfo?.name || "Restaurant Name Not Found"}
        </h1>
        <p className="text-lg text-gray-600 mb-1">
          {restaurantInfo?.cuisines?.join(", ") || "Cuisines not found"}
        </p>
        <p className="text-gray-500 mb-1">
          {restaurantInfo?.costForTwoMessage || "Cost info not found"}
        </p>
        <p className="text-yellow-600 font-medium mb-1">
          ⭐ {restaurantInfo?.avgRating} ({restaurantInfo?.totalRatingsString})
        </p>
        <p className="text-gray-500 mb-1">
          {restaurantInfo?.areaName}, {restaurantInfo?.city}
        </p>
        <p className="text-gray-500">
          ⏱ {restaurantInfo?.sla?.deliveryTime} minutes
        </p>
      </div>

      {/* Menu Section */}
      <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Menu</h2>
      <ul className="grid gap-4 sm:grid-cols-1 md:grid-cols-2">
        {itemCards?.map((item) => {
          const info = item.card.info;
          const price = info.price || info.defaultPrice;

          return (
            <li
              key={info.id}
              className="bg-white border border-gray-200 rounded-xl shadow hover:shadow-md p-4 transition-all duration-200"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    {info.name}
                  </h3>
                  {price ? (
                    <p className="text-sm text-gray-600 mt-1">₹{price / 100}</p>
                  ) : (
                    <p className="text-sm text-gray-400 italic mt-1">
                      Price not available
                    </p>
                  )}
                </div>
                {info.imageId && (
                  <img
                    src={MENU_CARD_API + `${info.imageId}`}
                    className="w-20 h-20 object-cover rounded-md ml-4"
                    alt={info.name}
                  />
                )}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
