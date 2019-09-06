import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout/Layout';
import Quotes from '../components/Common/Quotes';

import '../styles/LoginAndRegister.css';

let Register = () => {
  return (
    <Layout>
      <section className='AuthSection'>
        <section className='Auth'>
          <section>
            <h2>Register</h2><br />
            <Link className='toAlternative' to='login'>
              Or Login
            </Link>
            <input type='text' placeholder='Full Name' />
            <input type='text' placeholder='Email Address' />
            <input type='text' placeholder='Username' />
            <input type='text' placeholder='*****' />
            <input type='text' placeholder='*****' />
            <input type='submit' className='RegisterBtn' value='Submit'/>
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