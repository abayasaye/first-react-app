import { useState } from "react";
import ChildrenComponent from "./components/pages/ChildrenComponent/ChildrenComponent";
import GradeComponent from "./components/pages/GradeComponent/GradeComponent";
import CatComp from "./components/pages/HomeComponent/CatComponent";

function Home() {
  const [saveInput,setSaveInput] = useState()
  const saveInputValues = ()=>{
    console.log(saveInput);
  }
  return (
    <h1>
      HOME-COMPONENT
      <label htmlFor="text">enter text here</label>
      <input onChange={(e)=>e.target.value} type="text" name="text-input" data-testid="input-text-id" placeholder="enter text" />
      <button onClick={saveInputValues}>CLICK</button>
      <h1>{saveInput}</h1>
      <CatComp />
      <ChildrenComponent />
      <GradeComponent students = {20} nameOfClass="bio" teacherName= "delores"/>
    </h1>
  );
}
export default Home;
