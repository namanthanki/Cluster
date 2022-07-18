import { lazy } from "react";
import "./styles/home.css";

const List = lazy(() => import("../components/List"));

const ListTitles = [
  { title: "First List Item" },
  { title: "Second List Item" },
  { title: "Third List Item" },
  { title: "Fourth List Item" },
  { title: "Five List Item" },
  { title: "Six List Item" }
]

const Home = () => {
  return (
    <div className="home-root">
      <div className="hero-body">
        <h1 className="hero-header">DISCOVER CLUSTERS SLOGAN SOMETHING</h1>
        <p className="hero-subtext">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vel consectetur libero. Proin risus arcu, ultrices a felis eget, porta tincidunt nisi. Cras et felis nisi. Etiam vel condimentum lacus. Ut a hendrerit ex, vel cursus magna. Aliquam erat volutpat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam auctor volutpat ante. Nunc vel augue vestibulum, commodo dui sed, elementum est. In fermentum nisl vitae diam pharetra imperdiet. Etiam dapibus quam tempus lacus dapibus, vitae dictum mauris iaculis. Etiam in tortor et mauris rhoncus auctor. Cras vulputate nulla eget convallis finibus.
        </p>
      </div>
      <div className="lists-container">
        <h2 className="lists-header">Browse Lists</h2>
        <List listTitles={ListTitles}/>
      </div>
    </div>
  );
};

export default Home;
