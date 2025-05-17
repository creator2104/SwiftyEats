// import RestaunrantCard from "./Restaurantcard";
// import resList from "../utils/mockdata";
// import { useState } from "react";

// const Body = () => {
// Local State variable - super powerful variable
// super powerful variable keeps the ui sync with the data layer updated which normal variable can't do it
// Local State Variable's scope is till the end of the component
// State variable means it maintains the state of your component
// const [listofrestaurants] = useState([default value passes here]);

//setlistofrestaurants is a method to upadte the list of listofrestaurants
// const arr = useState(resList);

// const [listofrestaurants,setlistofrestaurants] =  arr
//suppose i wanna make listofrestaurants empty then i can do setlistofrestaurants([])

//Normal js variable
//     let listofrestaurantsJS = [ {
//         info: {
//         id: "435699",
//         name: "Pizza Hut",
//         cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/17/7fc60a7d-283f-4685-99ae-c62c4fb74cd9_435699.jpg",
//         costForTwo: 350000,
//         cuisines: ["Pizzas","Burgers"],
//         avgRatingString: "4.0",
//         deliveryTime: 22,
// }
// },
//     {
//         info: {
//         id: "435700",
//         name: "Dominos",
//         cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/17/7fc60a7d-283f-4685-99ae-c62c4fb74cd9_435699.jpg",
//         costForTwo: 300000,
//         cuisines: ["Pizzas","Fast food"],
//         avgRatingString: "3.8",
//         deliveryTime: 24,
// }
// },
//     {
//         info: {
//         id: "435701",
//         name: "MACD",
//         cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/17/7fc60a7d-283f-4685-99ae-c62c4fb74cd9_435699.jpg",
//         costForTwo: 400000,
//         cuisines: ["Burgers","French Fries"],
//         avgRatingString: "4.2",
//         deliveryTime: 20,
// }
// }]

//     return(
//         <div className="body">
//         <div className="filter">
//            <button className="filter-btn" onClick={()=>{
// I want above 4 ratings restaurant so use filter for it
//               filteredList = listofrestaurants.filter((res)=>parseFloat(res.info.avgRatingString)>4)
//             setlistofrestaurants(filteredList)
// here react will do re-rendering bcz whenever u change something in component like deletion,addition it will quickly updated in ui using state react variable (super powerful variable)
//            }}>Top Rated restaurants</button>
//            {/* you have to pass call back function in onclick and the blue curly braces is we sued bcz we are writing js in it */}
//         </div>
//          <div className="res-container">
//             {
//                 listofrestaurants.map(restaurant => <RestaunrantCard key={restaurant.info.id} resData={restaurant}/>)
//             }
//          </div>
//         </div>
//     )
// }

// export default Body;

// react use reconciliation algorithm (react fiber)
// diff algorithm
// react doesn't touch the dom alot that's why react is fast
// component returns an object and in that object we have jsx or html - this is treated as virtual DOM
// react is doing efficient virtual dom manipulation

// virtual dom is like html representation in object
// virtual dom is too older so react took virtual dom and built its own algorithm over virtual dom
//react can efiiciently find out the difference between virtual doms and updates the ui
// react is fast bcz it has virtual dom and diff algorithm which is very efficient , u can do efficient dom manipulation





// App5
import { useEffect, useState } from "react";
import {Shimmer} from "./Shimmer";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import RestaunrantCard from "./RestaurantCard";

const Body = () => {
  const [listofrestaurants, setlistofrestaurants] = useState([]);
  const [filteredRestaurant,setfilteredRestaurant] = useState([]);

  const [searchText, setsearchText] = useState("");
  useEffect(() => {
    fetchdata();
  }, []);
  // useeffect takes two arguements first is callback function and second arguement is dependency array
  // the callback func will be called after your component renders

  const fetchdata = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.2156354&lng=72.63694149999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    // fetch returns a promise
    // fetch superpower is given by browser not js
    // fetch will fetch the data from the api
    const json = await data.json();
    // console.log(json);
    // optional chaining
    // The ?. operator is like the . chaining operator, except that instead of causing an error if a reference is nullish (null or undefined), the expression short-circuits with a return value of undefined. When used with function calls, it returns undefined if the given function does not exist.
    // setlistofrestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    // setfilteredRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    
    const restaurants =
    json?.data?.cards
      ?.find((card) => card?.card?.card?.gridElements?.infoWithStyle?.restaurants)
      ?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];

  setlistofrestaurants(restaurants);
  setfilteredRestaurant(restaurants);
  };
  // console.log("body rendered");

  // Conditional Rendering
  // rendering on basis of condition is known as condition rendering
  // if(listofrestaurants.length===0){
  //   return <Shimmer/>
  // }

  //  checking for online and offline status functionality 
  const onlineStatus = useOnlineStatus()

  if(!onlineStatus){
    return <h1>Looks like you're offline !! please check your internet connection</h1>
  }

  
  // used ternary below
  return listofrestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            placeholder="Do you want a coffee?"
            value={searchText}
            onChange={(e) => {
              setsearchText(e.target.value);
            }}
          />
          {/* here the value of searchtext could not be changed bcz the state variable is not changed and thats why we cant enter the text inside search box  */}
          <button
            className="search-btn bg-gray-200 "
            onClick={() => {
              console.log(searchText);
              // Filter the restaurant cards and update the UI
              const filteredRestaurant = listofrestaurants.filter((res) =>
                res?.info?.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setfilteredRestaurant(filteredRestaurant);
            }}
          >
            search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listofrestaurants.filter(
              (res) => parseFloat(res.info.avgRatingString) > 4.3
            );
            setfilteredRestaurant(filteredList);
          }}
        >
          Top Rated restaurants
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurant .map((restaurant) => (
          <Link style={{textDecoration:"none"}} key={restaurant.info.id} to={"/restaurants/"+restaurant.info.id}><RestaunrantCard resData={restaurant} /></Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
