import { useEffect, useState } from "react";

const User = ({name}) => {
    const [count] = useState(0)//o is a initial value
    const [count2] = useState(1)//1 is a initial value
    useEffect(()=>{
        // API calls
    },[])
    
    // async function getuserInfo(){
        
    // }
    return <div className="user-card p-4 m-4">
     <h1>count = {count}</h1>   
     <h1>count = {count2}</h1>   
     <h2>{name}</h2>
     <h3>Location: Surat, Gujarat</h3>
     <h4>Contact: 1234567890</h4>
    </div>
}

export default User;