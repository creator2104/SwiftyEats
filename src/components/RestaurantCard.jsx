import { CDN_URL } from "../utils/constants";
// this is how you write named import

const stylecard = {
    backgroundColor : "#f0f0f0"
}

const RestaunrantCard = ({resData}) =>{
    const {cloudinaryImageId,name,cuisines,avgRatingString,costForTwo} = resData?.info;
    return( 
    <div className="res-card" style={stylecard}>
    
    <img className="res-logo" src={CDN_URL+cloudinaryImageId} alt="res-logo"/>
          <h3>{name}</h3>
          <h4>{cuisines.join(", ")}</h4>
          <h4>{avgRatingString}</h4>
          <h4>{costForTwo}</h4>
          <h4>{resData?.info?.sla?.slaString}</h4>
          </div>
    )
}

export default RestaunrantCard;