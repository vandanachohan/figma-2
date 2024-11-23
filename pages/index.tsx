import React from "react";
 import Header from "./components/header";
import Navber from "./components/navber";
import Hero from "./components/hero";
import Footer from "./components/footer";
import ExploreCourses  from "./components/ExploreCourses ";
import OurAchivements from "./components/OurAchivements";




 export default  function Home (){
    return(
      <div>
        <Header />
        <Navber/>
        <Hero/>     
        <Footer/>
        <ExploreCourses />
        <OurAchivements/>
      </div>
    )
 };
 
 
