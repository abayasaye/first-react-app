import ChildrenComponent from "./components/pages/ChildrenComponent/ChildrenComponent";
import GradeComponent from "./components/pages/GradeComponent/GradeComponent";
import CatComp from "./components/pages/HomeComponent/CatComponent";

function Home() {
  return (
    <h1>
      beautifull world
      <CatComp />
      <ChildrenComponent />
      <GradeComponent students = {20} nameOfClass="bio" teacherName= "delores"/>
    </h1>
  );
}
export default Home;
