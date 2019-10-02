import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout/Layout';
import Quotes from '../components/Common/Quotes';

import '../styles/LoginAndRegister.css';

const initialState = {
  name: '',
  email: '',
  username: '',
  password: '',
  confirmPassword: ''
}

let Register = () => {
  const [state, setState] = useState(initialState)

  const handleChange = ({ target: { value, name } }) => {
    setState(prevState => ({
      ...prevState, [name]: value
    }))
  }

  const handleSubmit = e => {
    e.preventDefault()


  }

  console.log('state', state)

  return (
    <Layout>
      <section className='AuthSection'>
        <section className='Auth'>
          <section>
            <h2>Register</h2><br />
            <Link className='toAlternative' to='login'>
              Or Login
            </Link>
            <form onSubmit={handleSubmit}>
              <input
                type='text'
                name="name"
                value={state.name}
                placeholder='Full Name'
                onChange={handleChange}
              />
              <input
                type='text'
                name="email"
                value={state.email}
                placeholder='Email Address'
                onChange={handleChange}
              />
              <input
                type='text'
                name="username"
                value={state.username}
                placeholder='Username'
                onChange={handleChange}
              />
              <input
                type='password'
                name="password"
                value={state.password}
                placeholder='Password'
                onChange={handleChange}
              />
              <input
                type='password'
                name="confirmPassword"
                value={state.confirmPassword}
                placeholder='Confirm Password'
                onChange={handleChange}
              />
              <input type='submit' className='RegisterBtn' value='Submit' />
            </form>
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