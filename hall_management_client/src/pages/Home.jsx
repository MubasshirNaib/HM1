import { Helmet } from 'react-helmet-async';
import Banner from './../components/Banner';
import Accordion from './../components/Accordion';
import Footer from './../components/Footer';
import React from "react";
import Container from '../components/ui/Container';
import "../styles/banner.css"
import Marquee from 'react-fast-marquee'
import { Link, NavLink } from 'react-router-dom';
import About from '../components/ui/About';
import Achievements from '../components/ui/achievement';
import Slider from '../components/ui/Slider';

const Home = () => {
  
  return (
    <div>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Container>
        <Marquee pauseOnHover>
        <div className="announcement">
          <div className="announcement-text text1">
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quaerat.</span>
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quaerat.</span>
          </div>
          <div className="announcement-text text2">
            <span><Link to="/login">Shahid Tarek Huda Hall</Link></span>
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quaerat.</span>
          </div>
        </div>
        </Marquee>
      </Container>
      <Banner />
      <div className="mb-6 mt-10">
      <h1 className='text-4xl text-center font-bold font-serif'>About</h1>
      </div>
      <About/>

      <div className="mb-6 mt-10">
      <h1 className='text-4xl text-center font-bold font-serif'>Achivements</h1>
      </div>
      <Achievements/>
      <Slider/>
      <Accordion/>
      <Footer />
      </div>
  );
};

export default Home