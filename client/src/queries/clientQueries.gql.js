import { gql } from 'apollo-boost'

export const GET_TOKEN_LOCAL = gql`
  query {
    auth @client {
      token
    }
  }
`

export const GET_CURRENT_USER = gql`
  query  {
    currentUser @client {
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

// Mutations
export const STORE_TOKEN = gql`
  mutation storeToken($token: String!) {
    storeToken(token: $token) @client
  }
`

export const STORE_CURRENT_USER = gql`
  mutation storeCurrentUser(
    $id: ID
    $createdAt: String
    $updatedAt: String
    $firstName: String
    $lastName: String
    $username: String
    $email: String
    $isVerified: Boolean
    $oneId: String
  ) {
    storeCurrentUser(
      id: $id
      createdAt: $createdAt
      updatedAt: $updatedAt
      firstName: $firstName
      lastName: $lastName
      username: $username
      email: $email
      isVerified: $isVerified
      oneId: $oneId
    ) @client
}`