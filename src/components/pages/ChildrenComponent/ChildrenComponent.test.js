import { render ,screen } from "@testing-library/react";
import ChildrenComponent from "./ChildrenComponent";

describe("Test for ChildrenComponent",()=>{
  test("there is a text", () => {
    render(<ChildrenComponent/>)
    const testElement = screen.getByText("Hello Children")
    expect(testElement).toBeInTheDocument()
   })

   test("find by the test id",()=>{
    render(<ChildrenComponent/>)
    const spanElement = screen.getByTestId("span-Id")
    expect(spanElement).toHaveTextContent("Hello Children")
   })
   test("class name exist",()=>{
    render(<ChildrenComponent/>)
    const classElement = screen.getByTestId("span-Id")
    expect(classElement).toHaveClass("span-Class")
   })
   
})

