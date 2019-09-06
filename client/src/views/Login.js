import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout/Layout';
import Quotes from '../components/Common/Quotes.js';

import '../styles/LoginAndRegister.css';

let Register = () => {
  return (
    <Layout>
      <section className='AuthSection'>
        <section className='Auth'>
          <section>
            <h2>Login</h2><br />
            <Link className='toAlternative' to='Register'>
              Or Register
            </Link>
            <input type='text' placeholder='Email Address' />
            <input type='password' placeholder='Password' />
            <input type='submit' className='RegisterBtn' value='Log In'/>
          </section>
        </section>
        <section className='Quotes'>
          <Quotes />
        </section>
      </section>
    </Layout>
  )
}

export default Register;