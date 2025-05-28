import { createContext } from "react";

const UserContext = createContext({
    loggedInUser: "Default User",
})

export default UserContext;

// after creating the context we can use it in any component by using the useContext hook 
// react context is a way to share values (like data or functions) between components without having to pass props through every level of the component tree. It allows you to create a global state that can be accessed by any component that needs it, making your code cleaner and easier to maintain.
// only data u use in multiple components should be put in context