import { render , screen } from "@testing-library/react";
import GradeComponent from "./GradeComponent";

describe("tests for GradeComponent",()=>{
    test(" for ",()=>{
        render(<GradeComponent students = {20} nameOfClass="bio" teacherName= "delores"/>)
        const GradeElement = screen.getByTestId("grade-id")
        expect(GradeElement).toHaveTextContent(20,"bio","delores")
    })
})