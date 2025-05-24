import React from "react";
// import User from "./User";
//what is the class component - its a normal js class at the end of day
// To make Userclass a component we write extends React.component
// extends React.component will tell parcel that this is a class based component
// React.component is a class which is given by react and Userclass is inheriting some properties from it
// extends React.Component - This means that UserClass inherits from the React.Component class.
// It gives the UserClass access to methods and properties that React components use, like render() and state.

// class Userclass extends React.Component{
//   render(){
    // returns a piece of jsx which would be displayed to the UI
//   }
// }
class UserClass extends React.Component {
  // This line defines a new class component called UserClass.
  constructor(props) {

    // The constructor method is automatically called when a new instance of a class is created.

    super(props); // Calling the parent constructor

    // The super keyword in JavaScript is used to call the constructor or methods of a parent class. It acts as a bridge between the child and parent classes.

    // In JavaScript, a class that extends another class (like React.Component) must call super() before using this.
    // This ensures that the parent class is properly initialized.

    // When you create a class that extends another class, the subclass inherits all the methods and properties of the parent class.
    // To properly inherit and initialize the parent class, you must call the parent constructor.

    // When super(props) is called:

    //1. It triggers the parent class constructor (React.Component).

    //2. The parent constructor initializes the component.

    //3. this.props becomes accessible within the derived class.

    // Skipping super() will lead to a ReferenceError.

    // when i am rendering a function component on page it means i am mounting or invoking the function 
    // when you are loading a class based component that means i am creating an instance of a class 
    // whenver you create an instance of a class constuctor would get called and this would be best place to receive props and create state variables 
    this.state = {
      // state is a whole big object  which contains multiple state variables
      // count : 0,
      // count2 : 1,
      // count3
      // count4
      // if we create multiple state varibles which is not being used so when we update the state variable 1 and 2 at that time react will not touch the count3,4,5  uses reconciliation process
      userInfo : {
        name : "Dummy",
        location : "Default" ,
      }
    }
    // console.log(this.props.name + "child constructor");
    // above this.state is a big object which contains all the state variables which is created by you
  }
    async componentDidMount() {
      // console.log(this.props.name + "child component did mount");
      // first constuctor then render then did mount would printed 
      const data = await fetch("https://api.github.com/users/akshaymarch7")
      const json = await data.json()
      // console.log(json);

      this.setState({
        userInfo : json
      })
      // this will update the dummy data to json fetched data from github api
  }

  componentDidUpdate(){
    console.log("Component did update");
  }

  componentWillUnmount(){
    console.log("component will mount");
  }
    render() {
      // console.log(this.props.name+"child render");
        // const {name,location} = this.props
        // const {count,count2} = this.state
        const {name,location,avatar_url} = this.state.userInfo
    return (
      <div className="user-card ">
        {/* <h1>count : {count}</h1>
        <h1>count : {count2}</h1> */}
        <button className="bg-orange-500 text-white rounded-lg m-4 p-2" onClick={()=>{
          // never update state variables directly 
          this.setState({
            count : this.state.count + 1,
            count2 : this.state.count2 + 1
            // whenever state varible updates react will re render its component
          })
          // this.setState will update the value of count and it contains the updated value of your set varibles 
        }}>Count increase</button>
        <img src={avatar_url} className="p-4"/>
        <h2 className="p-4">Name : {name}</h2>
        <h3 className="p-4">Location : {location}</h3>
        <h4 className="p-4">Contact: 1234567890</h4>
      </div>
    );
  }
}
// render method returns a piece of jsx which will be displayed to the UI
export default UserClass;

/*
-------------Mounting-----------------
cosntructor(dummy)
render(dummy)
<HTML dummy>
component did mount
<API calls>
<this.setState> -> state varible is updated

------------updated------------------
render(API data)
<HTML (new API data)>
componentdid update
*/ 
