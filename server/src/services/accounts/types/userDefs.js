const { gql } = require( "apollo-server" );

const userDefs = gql`
  interface MutationResponse {
    code: String
    message: String
  }

  type User {
    name: String
    roles: Roles
    id: ID
    goals: [Goal]
    username: String!
    email: String!
    isActive: Boolean
    isVerified: Boolean
  }

  type LoggedInUser implements MutationResponse {
    code: String
    token: String
    message: String
  }

  enum Roles {
    AMDIN
    PREMIUM_MEMBER
    USER
  }

  extend type Query {
    getAllUsers: [User]
    getUser(id: ID): User
    resendEmailVerification(id: ID!): String!
    sendEmailVerification(id: ID!): String!
  }

  extend type Mutation {
    addUser(data: createUser): String!
    verifyEmail(emailToken: String!): String!
    loginUser(data: loginUser): LoggedInUser
    updateUser(data: updateUser): String!
    deleteUser(id: ID!): String!
  }

  input createUser {
    name: String
    username: String!
    password: String!
    email: String!
  }

  input loginUser {
    emailOrUsername: String!
    password: String!
  }
  
  input updateUser {
    name: String
    username: String
    password: String
    email: String
    roles: String
    isActive: Boolean
  }
`;

module.exports = userDefs;