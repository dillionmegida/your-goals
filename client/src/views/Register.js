import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/react-hooks'
import Layout from '../components/Layout/Layout';
import Quotes from '../components/Common/Quotes';
import { ADD_NEW_USER } from '../queries/serverQueries.gql'

import { validator } from '../utils/validate'

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
  const [loading, setLoading] = useState(false)
  const [registerUser] = useMutation(ADD_NEW_USER)

  const handleChange = ({ target: { value, name } }) => {
    setState(prevState => ({
      ...prevState, [name]: value
    }))
  }

  const handleSubmit = async e => {
    e.preventDefault()

    const valid = validator(state)

    if (!valid) alert('invalid form inputs')

    delete state.confirmPassword

    const { data, error, loading } = await registerUser({
      variables: { ...state }
    })

    setLoading(loading)
  }

  return (
    <Layout>
      <section className='AuthSection'>
        <section className='Auth'>
          <section>
            <h2>Register</h2><br />
            <Link className='toAlternative' to='user'>
              Or User
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
                type='email'
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
              <button type='submit' className='RegisterBtn' value='Submit' disabled={loading} />
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
