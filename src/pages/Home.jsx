import React from 'react'
import Hero from '../components/Home/Hero'
import SubHero from '../components/home/SubHero'
import OurProject from '../components/home/OurProject'
import Features from '../components/home/Features'
import SubFeatures from '../components/home/SubFeatures'
import ContactHome from '../components/home/ContactHome'
import ContactHome2 from '../components/home/ContactHome2'
import ViProp from '../components/VIProjects/ViProp'


const Home = () => {
  return (
      <section>
      <Hero />
      <SubHero />
      <Features />
      <OurProject />
      <SubFeatures />
      <ContactHome />
      <ContactHome2 />
     
      
      
   </section>
  )
}

export default Home;