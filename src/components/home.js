import React, { Component } from 'react';
import { Grid, Row, Col, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AboutMe from './about-me';
import MyFooter from './footer';
import Projects from './projects';
import Contacts from './contacts';
import './stylesheet/home.css';

export default class Home extends Component {
  render() {
    return (
      <div>
          <div className="introduction">
            <div className="box1">
              <h1 className="animated-title">Welcome to my page</h1>
              <h2 className="intro-title">Computer Science Student</h2>
              <h2 className="intro-title">Full-Stack Developer</h2>

              <div className="social-network-logo">
                <div><a href="#" className="dark-black"><i class="fab fa-github-square"></i></a></div>
                <div><a href="#"><i class="fab fa-linkedin"></i></a></div>
                <div><a href="#" className="full-black"><i class="fab fa-medium"></i></a></div>
                <div><a href="#" className="twitter-color"><i class="fab fa-twitter-square"></i></a></div>
            </div>

            </div>

             <div className="box2 short-bio">
               <img className="intro-parts" className="profile-image" src="../assets/professional-profile-image.jpg"  href="somepage"/>
               <h2>About Me</h2>
               <p>Current student at University of Liverpool. I started coding seriously in 2018.
                 I have dabble with varies kinds of development. When I am not studying
                 or developing. You can find me in the gym or practicing with the University's Archery Club.
                 Everytime I hear someone mention Java and Javascript are the same, I lose a year's worth of life expectency.
                 <a href="#"> Check my blog to learn more about me.</a></p>
             </div>

            <div className="bio-box box4 secondary-color-theme"><p className="intro-parts">
              Computer Science student with creativity and problem solving skills.</p></div>
            <div className="bio-box box3 secondary-color-theme">
              <p className="intro-parts">Currrently developing with the MERN stack
               (<mark class="mongo">MongoDB</mark>,
                <mark class="express">Express</mark>,
                <mark class="react">React.js</mark> and
                <mark class="node">Node.js</mark>)</p></div>
            <div className="bio-box box5 secondary-color-theme"><p className="intro-parts">
              Every projects built by me has a real life purpose. <a href="#">Check them here</a>.</p></div>
            <div className="bio-box box6 secondary-color-theme"><p className="intro-parts">
              Want to build something?
              <a componentClass={Link} href="/contacts" to="/contact"> Get in touch. I love to build things.
              Especially with others.</a></p></div>
          </div>
          <AboutMe />
          <Projects />
          <Contacts />
    </div>
    )
  }
}
