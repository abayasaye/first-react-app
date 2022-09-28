import "./GradeComponent.css";
import React from "react";

const GradeComponent = (props)=>{
  return (
    <div data-testid = "grade-id"className="grade-component">
      <h1>{props.students}</h1>
      <h1>{props.nameOfClass}</h1>
      <h1>{props.teacherName}</h1>
    </div>
  );
};

export default GradeComponent;
