import ChildrenComponent from "./components/pages/ChildrenComponent/ChildrenComponent";
import CatComp from "./components/pages/HomeComponent/CatComponent";

function Home() {
  return (
    <h1>
      beautifull world
      <CatComp />
      <ChildrenComponent />
    </h1>
  );
}
export default Home;
