import useRestaurantMenu from "../utils/useRestaurantMenu";
import { Shimmer } from "./Shimmer";
import { useParams } from "react-router";

const RestaurantMenu = () => {

  const {resId} = useParams()

  const resInfo = useRestaurantMenu(resId)

  if(resInfo === null) return <Shimmer />

  const {itemCards} = resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]?.card?.card||{}
  console.log(itemCards);

  const restaurantInfo = resInfo?.cards?.[2]?.card?.card?.info;
  return  (
    <div className="menu">
      <h1>{restaurantInfo?.name || "Restaurant Name Not Found"}</h1>
      <h3>{restaurantInfo?.cuisines?.join(", ") || "Cuisines not found"}</h3>
      <h3>{restaurantInfo?.costForTwoMessage || "Cost info not found"}</h3>
      <h3>{restaurantInfo?.avgRating}</h3>
      <h3>{restaurantInfo?.totalRatingsString}</h3>
      <h3>{restaurantInfo?.areaName}</h3>
      <h3>{restaurantInfo?.city}</h3>
      <h3>{restaurantInfo?.sla?.deliveryTime}</h3>
      <ul>
        {itemCards?.map(item =><li key={item.card.info.id}>{item.card.info.name}</li>)}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
