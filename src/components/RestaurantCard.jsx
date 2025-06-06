import { CDN_URL } from "../utils/constants";
// this is how you write named import

const RestaurantCard = ({resData}) =>{
    console.log(resData);
    const {cloudinaryImageId,name,cuisines,avgRatingString,costForTwo} = resData.info;
    return( 
    <div className="res-card bg-gray-100 w-66 h-130 ml-8 my-6 shadow-lg rounded-lg p-4 hover:shadow-2xl transition-all duration-200 ease-in-out transform hover:scale-105">
    
    <img className="res-logo h-70 mb-4" src={CDN_URL+cloudinaryImageId} alt="res-logo"/>
          <h3 className="font-bold pb-2">{name}</h3>
          <h4>{cuisines.join(", ")}</h4>
          <h4>{avgRatingString}</h4>
          <h4>{costForTwo}</h4>
          <h4>{resData?.info?.sla?.slaString}</h4>
          </div>
    )
}

// Higher order component (HOC) 
// HOC is a function that takes a component and returns a new component
// RestaunrantCard will be taken as a input and will be returned as a new component which contains promoted label

// export const withPromotedLabel = (RestaurantCard) => {
// return (props) => {
//  return (
//       <div>
//        <label>Promoted</label>
//        <RestaurantCard {...props}/>
//       </div>
// }
// }
export default RestaurantCard;