import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Layout from './components/Layout/Layout';

class App extends Component {
  render() {
    return (
      <Layout mainStyle='HomeMain'>
        <h1>Set Your Goals 'n <br/> Ace `em  &#128640; </h1>
        <section className='Signin'>
          <a href='#'>
            SIGN IN
          </a>
          <a href='#'>
            SIGN UP
          </a>
        </section>
      </Layout>
    );
  }
}

export default App;
