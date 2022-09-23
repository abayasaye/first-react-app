import React from "react";
import ReactDOM from 'react-dom';
import CatComp from './CatComponent'

describe("tests for CatComponent ",()=>{
  it("return hello cats ",()=>{
    const div = document.createElement("div")
    ReactDOM.render(<CatComp/>, div)
    expect(div.innerHTML).toEqual(`<div class="cat-component"><h1>hello cats</h1></div>`)
  })
})