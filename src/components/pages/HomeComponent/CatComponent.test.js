import React from "react";
import ReactDOM from 'react-dom';
import CatComponent from './CatComponent'

describe("tests for CatComponent ",()=>{
  it("return hello cats ",()=>{
    const div = document.createElement("div")
    ReactDOM.render(<CatComponent/>, div)
    expect(div.innerHTML).toEqual(`<div className="home-component">
    <h1>hello cats</h1>
  </div>`)
  })
})