import { lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Home = lazy(() => import("./views/Home"));
const Navbar = lazy(() => import("./components/Navbar"));
const Cluster = lazy(() => import("./views/Cluster"));

const App = () => {
  return (
    <div className="App">
      <Router> 
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/cluster" element={<Cluster />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
