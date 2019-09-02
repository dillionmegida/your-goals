const { GraphQLDate, GraphQLDateTime } = require( 'graphql-iso-date' )
const { gql } = require( 'apollo-server' )

const userDefs = require( './services/accounts/types/userDefs' )

const linkSchema = gql`
  type Mutation {
    _: Boolean
  }

  type Query {
    _: Boolean
  }

  type Subscription {
    _: Boolean
  }

  scalar Date
  scalar DateTime
`

module.exports = [
  linkSchema,
  userDefs
]