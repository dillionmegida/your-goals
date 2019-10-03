import { gql } from 'apollo-boost'

export const LOGIN_USER = gql`
  mutation (
    $emailOrUsername: String!
    $password: String!
  ) {
    loginUser (data: {
      emailOrUsername: $emailOrUsername
      password: $password
    }) {
      code
      token
      message
    }
  }
`

export const ADD_NEW_USER = gql`
  mutation (
    $name: String!
    $username: String!
    $email: String!
    $password: String!
  ) {
    addUser (data: {
      name: $name
      username: $username
      email: $email
      password: $password
    })
  }
`

export const VERIFY_EMAIL = gql`
  mutation ($emailToken: String!) {
    verifyEmail (emailToken: $emailToken)
  }
`

export const RESEND_EMAIL_VERIFICATION = gql`
  query ($email: String!) {
    resendEmailVerification (email: $email)
  }
`

// Queries
export const GET_CURRENT_USER = gql`
  query ($token: String!) {
    getCurrentUser(token: $token) {
      id
      createdAt
      updatedAt
      firstName
      lastName
      username
      email
      isVerified
      oneId
    }
  }
`
