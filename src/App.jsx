import { lazy, Suspense } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Body from "./components/Body";
import Header from "./components/Header";
import Footer from "./components/Footer";
import './index.css'


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
    return (
        <div className="app">
          <Header/>
          <Outlet/>
          {/* we cant see outlet in HTML because it is being replaced by children*/}
          {/* if path is / then body page will work */}
          {/* <Body/> */}
          {/* if path is /about then about page will work */}
          {/* <About/> */}
          {/* if path is /contact then contact page will work */}
          {/* <Contact/> */}

          <Footer/>
        </div>
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
        path: "/contact",
        element: <Contact/>
      },
      {
        path: "/grocery",
        element:<Suspense fallback={<h1>Loading....</h1>}><Grocery/></Suspense>
      },
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