const userMutations = require( './services/accounts/resolvers/mutations/userMutations' )

const userQueries = require( './services/accounts/resolvers/queries/userQueries' )

module.exports = {
  Query: {
    ...userQueries
  },

  Mutation: {
    ...userMutations
  }
}