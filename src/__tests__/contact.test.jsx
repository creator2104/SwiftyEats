import { render ,screen } from "@testing-library/react"
import Contact from "../components/Contact.jsx"
import { describe, expect, test } from "vitest"
import   '@testing-library/jest-dom';
import { it } from "vitest";

// describe shows us the group of test cases
// u can make nested describes too
describe("contact us page test cases",()=>{
test("should load contact component",()=>{
    render(<Contact/>)

    const heading = screen.getByRole('heading', { name: /connect with me/i });
    //  /i is used for case sensitive 
    // we have two headings thats why we have to give specific data for the heading 

    expect(heading).toBeInTheDocument()
})

//  test("should load button inside contact component",()=>{
//     render(<Contact/>)

//     const button = screen.getByRole('button')

//     expect(button).toBeInTheDocument()
// })

// test and it are same 
it("should load contact component",()=>{
    render(<Contact/>)

    const heading = screen.getAllByRole('heading');
    //  /i is used for case sensitive 
    // we have two headings thats why we have to give specific data for the heading 

    console.log(heading.length);
})
})
