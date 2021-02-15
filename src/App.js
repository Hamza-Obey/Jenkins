import React from "react";
import "./App.css"
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Navbar from "./components/Navbar.js"
import Men from "./components/Men/Men.js";
import ControlledCarousel from "./components/Women/ControlledCarousel.js";
import Home from "./components/Home/Home.js" ;
import Buying from "./components/Men/Buying.js" ;
import Carouselh from "./components/Home/Carouselh.js"
import Buying2 from "./components/Men/Buying2.js" ;
import Buying1 from "./components/Women/Buying1.js" ;
import Footer from "./components/Footer.js"




 export default function App() {
  return (
    <Router>
      <div>
        <Navbar/>
        
        
      
        <Switch>
          <Route path="/Clothes Store ">
            <Home/>
            <Carouselh/>
            <Buying/>
          </Route>
          <Route  path="/Men"  >
             <Men/>
             <Buying/>
             <Buying2/>
           
          </Route>
          <Route path="/Women">
            <h1 className="Wo"> Women Clothing</h1>
            <br/>
          <ControlledCarousel/>
          <Buying1/>
          
          </Route>
          <Route path="/Home">
            <Home/>
            <Carouselh/>
            <Buying/>
          </Route>
        </Switch>
        <Footer/>
      </div>
    </Router>
  );
  
}
