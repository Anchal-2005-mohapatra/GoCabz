import React,{useEffect} from 'react';
import Choose from '../components/home/Choose';
import TrendingTour from '../components/home/TrendingTour';
import TopDestination from '../components/home/TopDestination';
import ClientsTestimonial from '../components/home/ClientsTestimonial';
import Vehicle from '../components/home/Vehicle';
import SpecialOffer from '../components/home/SpecialOffer';
import Review from '../components/home/Review';

import HeroSection from "../components/home/HeroSection";
const HomeComponent = () => {
  useEffect(()=>{
     window.scrollTo({
            top:0,
            behavior:'smooth'
        });
  },[]);
  return (
    <div>
      <HeroSection />
      <Choose />
      <TrendingTour />
      <TopDestination />
      <Review />
      <ClientsTestimonial />
      <Vehicle />
      <SpecialOffer />
    </div>
  )
}

export default HomeComponent;