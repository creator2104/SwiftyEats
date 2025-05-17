import React from "react";
import UserClass from "./UserClass";

class About extends React.Component{
    // whenever a class is created new instance would be created and then the constructor would be called and props would be extracted over here  
    constructor(props){
        super(props)
        // console.log("parent constructor");
        // react lifecycle 
        // firstly class About will create new instance and then print parent constructor and then go to the render and print parent render and then go to userclass and rendering of parent is not completed then its create new instance of Userclass and print child constructor and then print child render then child component did mount will be called and then remining parent mount will be called 
    }
    componentDidMount() {
    //   console.log("parent component did mount");
    //   component mount is used to make api calls 
    // in function component we use useEffect ot make api calls bcz it do its work after rendering here component did mount also do same work after rendering
    } 
    render(){
        // console.log("parent render");
       return(
        <div>
            <h1>About class component</h1>
            <h2>This is namaste react series</h2>
            <UserClass name={"first"} location={"Gujarat class"}/> 
            {/* <UserClass name={"second"} location={"US"}/>  */}
        </div>
       ) 
    }
}
 
// const About = () => {
//      return(
//         <div>
//             <h1>About</h1>
//             <h2>This is namaste react series</h2>
//             <UserClass name={"vinit prajapati (class)"} location={"Gujarat class"}/> 
//         </div>
//      )
// }

export default About;

// *********************************************** react cycle ****************************************************
// parent constructor
// parent render
// first child constructor
// first child render
// second child constructor
// second child render

// <DOM UPDATED IN A SINGLE BATCH>
// this is being done for the optimization purpose 

// first child component did mount
// second child component did mount
// parent component did mount

// mounting == loading