import "./App.css";
import {useEffect} from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Concert from "./pages/Concert";
import Footer from "./components/Footer";
import allConcerts from "./data/concerts.json";

function App() {
  const route = useLocation();
  // const scrollTop = () => {
  //   window.scrollTo(0,0);
  // }
  useEffect(() => {
    window.scrollTo(0,0)
  }, [route]);
  
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home allConcerts={allConcerts} />} />
        <Route
          path="/concert/:year/:slug"
          element={<Concert allConcerts={allConcerts}/>}
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
