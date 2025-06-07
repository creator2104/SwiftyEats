// import '@testing-library/jest-dom';
// import { sum } from './sum';
// import { render, screen } from "@testing-library/react";
// import { MemoryRouter } from "react-router-dom"; 

// test("",()=>{}) test takes two arguements first is string(deescription of what we are going to do with this test) and second is a callback function
// test("sum function should calculate the sum of two numbers",()=>{
//   const result = sum(3,5)

 //Assertion 
//   expect(result).toBe(8)

// }) 

import { fireEvent, render , screen} from "@testing-library/react";
import { Provider } from "react-redux";
import appStore from "../utils/appStore"
import Header from "../components/Header"
import { BrowserRouter } from "react-router-dom";
import { expect } from "vitest";
import '@testing-library/jest-dom';
import { it } from "vitest";

it("Should load header component with a login button",()=>{
    render(
    <BrowserRouter>
    <Provider store={appStore}>
        <Header/>
    </Provider>
    </BrowserRouter>
    )
    const loginbutton = screen.getByRole("button")
    // const loginbutton = screen.getByRole("button",{name:"Login"})
    // used if there is a multiple buttons 
    // const loginbutton = screen.getByText("Login")
    expect(loginbutton).toBeInTheDocument()
})

it("Should load header component with a cart items 0",()=>{
    render(
    <BrowserRouter>
    <Provider store={appStore}>
        <Header/>
    </Provider>
    </BrowserRouter>
    )
    // const cartItems = screen.getByText("cart(0)")
    const cartItems = screen.getByText(/cart/)
    expect(cartItems).toBeInTheDocument()
})

it("Should change Login button to Logout on click",()=>{
    render(
    <BrowserRouter>
    <Provider store={appStore}>
        <Header/>
    </Provider>
    </BrowserRouter>
    )

    const loginbutton = screen.getByRole("button",{name:"Login"})
    fireEvent.click(loginbutton)
    const logoutbutton = screen.getByRole("button",{name:"Logout"})
    expect(logoutbutton).toBeInTheDocument()
})