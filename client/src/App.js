import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './styles/App.css';

import Layout from './components/Layout/Layout';
import TestimonialSection from './components/Common/Testimonials';

class App extends Component {
  render() {
    return (
      <Layout mainStyle='HomeMain'>
        <section className='Intro'>
          <h1>Set Your Goals 'n <br /> Ace `em  &#128640; </h1>
          <p>Goals keep you focused, oriented and highly productive...</p>
          <section className='GetStarted'>
            <Link to='register'>
              SET YOUR FIRST GOAL NOW
            </Link>
          </section>
        </section>
        <TestimonialSection SectionId='Testimonials' />
      </Layout>
    );
  }
}

export default App;
