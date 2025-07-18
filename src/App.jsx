import { lazy, Suspense, useEffect, useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Body from "./components/Body";
import Header from "./components/Header";
import Footer from "./components/Footer";
import './index.css'
import UserContext from "./utils/UserContext";
import appStore from "./utils/AppStore";
import { Provider } from "react-redux";
import Cart from "./components/Cart";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Eager loading (static)
// import About from './About'; // bundled into main.js

// Lazy loading (dynamic)
// const About = React.lazy(() => import('./About')); // creates a separate chunk
// This tells the bundler: “Don’t include About in the main bundle. Load it only when this code path is reached.”
const Grocery = lazy(() => import ("./components/Grocery"))

const App = () => {
  return (
    <RouterProvider router={appRouter}/>
  )
}

export default App

const Applayout = () => {
  const [userName , setuserName] = useState();
  //authentication

  useEffect(() => {
   // Make an API call to fetch user data
   const data = {
      name: "",
   }
   setuserName(data.name);
  },[])
    return (
      <Provider store={appStore}>
        {/* whenever u want to provide your store wrap into provider for that component here we used for the whole application */}
      <UserContext.Provider value={{loggedInUser:userName , setuserName}}>
        <div className="app">
          {/* <UserContext.Provider value={{loggedInUser:"Elon Musk"}}> */}
          <Header/>
          {/* </UserContext.Provider> */}
          <Outlet/>
          {/* we cant see outlet in HTML because it is being replaced by children*/}
          {/* if path is / then body page will work */}
          {/* <Body/> */}
          {/* if path is /about then about page will work */}
          {/* <About/> */}
          {/* if path is /contact then contact page will work */}
          {/* <Contact/> */}
      
          <Footer/>
           <ToastContainer
            position="top-right"
            autoClose={1500}
            hideProgressBar
            newestOnTop
            closeOnClick
            pauseOnHover
            draggable
            theme="light"
          />
        </div>
        </UserContext.Provider>
        </Provider>
    )
}

// below we have created configuration and we have to pass it to render 
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Applayout />,
    children:[
      {
        path: "/",
        element: <Body />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/cart",
        element: <Cart />
      },
      {
        path: "/contact",
        element: <Contact/>
      },
      {
        path: "/grocery",
        element:<Suspense fallback={<h1>Loading....</h1>}><Grocery/></Suspense>
      },
      // Suspense is a React component used to wrap lazy-loaded components or anything that takes time to load (like data or code).
      // It lets you show a fallback UI (like a loading message or shimmer) until the lazy component is fully loaded.
      {
        path:"/restaurants/:resId",
        // : means its a dynamic it would change acording to the data
        element:<RestaurantMenu/>
      }
    ],
    errorElement:<Error/>
  },
  ]
)
// configuration means some infomrmation that will define what will be happen in specific route
// createBrowserRouter will take a list of paths , path is just an array of object
// a page is a component in react

// Benefits of Chunking + Lazy Loading
// ✅ Smaller initial JS bundle → Faster first load

// ✅ Less memory usage

// ✅ Easier caching of code

// ✅ Better user experience on slow devices