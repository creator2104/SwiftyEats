// custom hooks 

import { useEffect, useState } from "react";

// we wanna online / offline functionality for the single time so we will use useEffect() for that purpose 
// and to update the UI online to offline and offline to online we will use useState over here
const useOnlineStatus = () =>{
    const [OnlineStatus,setOnlineStatus] = useState(navigator.onLine)
    useEffect(()=>{
        window.addEventListener("offline",()=>{
          setOnlineStatus(false)
        })
        window.addEventListener("online",()=>{
          setOnlineStatus(true)
        })
    },[])
    return OnlineStatus; 
}

export default useOnlineStatus;
