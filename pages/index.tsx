import React from "react";
 import Header from "./components/header";
import Navber from "./components/navber";
import Hero from "./components/hero";
import ExploreCourses  from "./components/ExploreCourses ";
import OurAchivements from "./components/OurAchivements";
import Topbar from "./components/topBar";
import Team from "./components/team";
import OurTestimonial from "./components/OurTestimonial";
import Footer from "./components/footer";



 export default  function Home (){
    return(
      <div>
        <Header />
        <Navber/>
        <Hero/>     
        <Topbar/>
        <ExploreCourses />
        <OurAchivements/>
        <Team/>
        <OurTestimonial/>
        <Footer/>
      </div>
    )
 };
 
 
