import "./ChildrenComponent.css";
import React from "react";

const ChildrenComponent=()=> {
  return (
    <section className="children-component" data-testid= "section-id">
      <span data-testid = "span-Id" className="span-Class">Hello Children</span>
    </section>
  );
};

export default ChildrenComponent;
