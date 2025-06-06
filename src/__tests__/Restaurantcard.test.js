import { render , screen } from "@testing-library/react";
import RestaurantCard from "../components/RestaurantCard";
import { expect, it } from "vitest";
import MOCK_DATA from "../components/mocks/resCardMock.json"
import "@testing-library/dom"

it("should render restaunrant card component",()=>{
    render(<RestaurantCard resData={MOCK_DATA}/>)
    const name = screen.getByText("Natural Ice Cream")
    expect(name).toBeInTheDocument()
})
