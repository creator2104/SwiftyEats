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

