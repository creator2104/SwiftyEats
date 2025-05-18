// made new component and their named files in components folder 

import { LOGO_URL } from "../utils/constants";
import { useState,useEffect } from "react";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
// link hook work exectly same as anchor tag

export const Header = () => {

  const [btnNameReact,setbtnNameReact] = useState("Login")
  // never write usestate in if condition ,for loop or in functions
  // never use useState outside your component , it doesn't make any sense
  // console.log("Header render");
  // we cant update a value in const but in react when we do with usestate it is creating new insatance for btnNameReact so no worries to use const 

  useEffect(()=>{
    // console.log("useEffect called");
  },[btnNameReact])
  // everytime my component renders useEffect would be called 
  // if no dependency array => useEffect is called on every render
  // if dependecy array is empty = [] => useEffect is called on iniial render (just once) 
  // if dependecy array is [btnNameReact] => useEffect is called everytime btnNameReact is updated 

    const OnlineStatus = useOnlineStatus()
    return (
        <div className="flex justify-between font-serif shadow-lg sticky top-0 bg-white text-lg z-50">
        <div className="logo-container flex">
          <img className="w-28" src={LOGO_URL} alt="Food-app-logo"/>
        </div>
        <div className="nav-items">
         <ul className="flex p-4 m-4 space-x-6">
            <li className="p-1">
              Online Status: {OnlineStatus ? "✅" : "🛑"} 
            </li>
            <li className="hover:bg-gray-200 p-1 cursor-pointer"> <Link to="/">Home</Link></li>
            <li className="hover:bg-gray-200 p-1 cursor-pointer"> <Link to="/grocery">Grocery</Link></li>
            {/* never use anchor tag in react instead use link beacuse anchor tag reloads whole page everytime and link refreshes only perticular component */}
            <li className="hover:bg-gray-200 p-1 cursor-pointer"> <Link to="/about">About us</Link></li>
            <li className="hover:bg-gray-200 p-1 cursor-pointer"> <Link to="/contact">Contact us</Link></li> 
            <li className="cursor-pointer p-1">Cart</li>
              <button className="bg-orange-500 text-white px-4 rounded-lg border-1 hover:bg-orange-600 cursor-pointer" onClick={()=>{
              btnNameReact=="Login" ? setbtnNameReact("Logout") : setbtnNameReact("Login")
              // whenever this setbtnnamereact is getting called react will re-render whole header component 
              // every time the button is getting clicked react is doing re-consilliation process and diff algo and it also changes the button only not doing on another dom element that's why react is fast bcz it concentrate on the needed element to be updated
            }}>{btnNameReact}</button>
         </ul>
        </div>
        </div>
    )
}

export default Header;
// if you wanna add this header into App4 then you have to first export this file to there and then import to there 