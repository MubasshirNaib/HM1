import { Helmet } from 'react-helmet-async';
import Banner from './../components/Banner';
import Accordion from './../components/Accordion';
import Footer from './../components/Footer';
import React from "react";
import Container from '../components/ui/Container';
import "../styles/banner.css"
import Marquee from 'react-fast-marquee'
import { Link, NavLink } from 'react-router-dom';

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
      <Accordion/>
      <Footer />
      </div>
  );
};

export default Home