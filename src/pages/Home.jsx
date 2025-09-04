import React from "react";
import Hero from "../components/Hero";
import Show from "../components/Show";
import Feedback from "../components/Feedback";
import SocialMedia from "../components/SocialMedia";
import Team from "../components/Team";
import Trainers from "../components/Trainers";
import HeadTrainer from "../components/HeadTrainer";
import Contact from "../components/Contact";  
import Testimonials from "../components/Testimonials";
import MembershipPlans from "../components/MembershipPlans";
import Services from "../components/Services";

function Home() {
  return (
    <div>
      <Hero />
      <Show />
      <HeadTrainer />
      <Trainers />
      <Team />
      <Services />
      <MembershipPlans />
      <Feedback />
      <SocialMedia />
      <Contact />
      <Testimonials />

    </div>
  );
}
export default Home;
