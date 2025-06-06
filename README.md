# higher order component is a function that takes a component and returns a component
- higher order functions takes a component as an input and then enhances it or add extra features to that component and give it back the component

# all the react applications have two layers one is UI layer and another one is data layer 
- UI layer is powered by data layer
- data layer consists of your state , props , local variables 
- so the major part is to manage the data layer 
- UI layer is jsx you write 

# Lifting the state up

# redux is not mendatory

# react and redux are different libraries
- redux offers easy debugging
- for modern days we use redux toolkit
- if i add item i wanna add it to the cart and add no of items in the cart so we use rtk(redux toolkit)
- redux store is a big object and it is kept into the central place and any component can access it
- our store is divided into small slices like cart , user , theme 
- whenever you click on add button it  will despaches(action) and after that it will calls a function(reducer) and that function will internally modifies the cart  
- we will use selector to read the data from the store and the selector will update our react component so basically it will read from cart data and update the count of the cart 
- subscribing to the store using selector , when we update the cart data it will automatically update the header cart data to the UI 

# Redux Toolkit
- Install @redux/toolkit and react-redux libraries
- Build our store 
- Connect our store to our app 
- slice (cartslice) 
- Dispatch(Action)
- Reduce function 
- Selector (subscribe)

# Types of testing (developer)
- Unit testing - u r testing small unit or a component in react application
- Integration testing - done with multiple components and we have to write code for this 
- End to end testing - e2e testing - as soon as user lends to the website and leaves the website 

- React testing library builds in top of DOM testing library
- React testing library uses jest bts

# setting up testing in our app 
- Install React Testing Library
- Installed jest  

- __ - two underscor means dunder tests

# need of redux
We use Redux in React (or other JavaScript apps) to manage the global state of an application in a predictable, centralized way. Here's a simple breakdown of why Redux is used:

✅ 1.Centralized State Management
Instead of passing data manually through many components (prop drilling), Redux stores all state in a single store. Any component can access or update this state directly.

✅ 2. Scalable Architecture
In large applications with many components, managing shared state without Redux becomes messy. Redux gives a structured way to scale.

✅ 3. Predictable State Changes
Redux uses pure functions called reducers to manage changes. This makes state changes predictable, easy to debug, and testable.

✅ 4. Easier Debugging
With tools like Redux DevTools, you can:
See every state change
Time-travel through past states
Debug bugs easily


- When to Use Redux?
You should consider Redux if:
Multiple components need the same shared data (e.g., user info, cart items)
The app grows complex over time
You want better control over state changes and debugging

-When Not to Use Redux?
You might not need Redux if:
The app is small or medium-scale
You can manage state easily with useState, useReducer, or Context API

- Example Use Cases
E-commerce cart system (shared between many pages)
Authentication state (login/logout)
Theme toggling (dark/light)
API data caching