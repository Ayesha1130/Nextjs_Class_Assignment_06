import Header from "@/components/Header/Header";
import Main from "@/components/Main/Main";
import React from "react";

import Trusted from "@/components/Trusted/Trusted";
import Tophead from "@/components/Tophead/Tophead";
import Category from "@/components/Category/Category";
import Achivements from "@/components/Achivements/Achivements";
import Course from "./course/page";
import Team from "./team/page";
import Testimonials from "./testimonials/page";
import Footer from "@/components/Footer/Footer";





  

export default function Home() {
  return (
    <div>
      <Tophead />
      <Header />
      <Main />
      <Trusted />
      <Category/>
      <Achivements/>
      <Course />
      <Team />
      <Testimonials />
      <Footer />
    </div>
  );
}
