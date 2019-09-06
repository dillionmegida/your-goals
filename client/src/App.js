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
          <p>Goals keep you focused. They keep you on track. When they are set, they are give priority to what is primary, while other activities remain Secondary.<br />
            Set your goals, and we'll help you achieve them &#128521;</p>
          <section className='Signin'>
            <Link to='login'>
              SIGN IN
            </Link>
            <Link to='register'>
              SIGN UP
            </Link>
          </section>
        </section>
        <TestimonialSection SectionId='Testimonials' />
      </Layout>
    );
  }
}

export default App;
