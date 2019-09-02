const { gql } = require( "apollo-server" );

const userDefs = gql`
  type Goal {
    id: ID
    title: String!
    isCompleted: Boolean
    isYearly: Boolean
    isMonthly: Boolean
    isWeekly: Boolean
    isDaily: Boolean
    author: [User]
  }

  extend type Query {
    getAllGoals: [Goal]
    getGoal(id: ID): Goal
    getCompletedGoals(): [Goal]
  }

  extend type Mutation {
    addGoal(data: createGoal): String!
    updateGoal(data: updateGoal): String!
    deleteGoal(id: ID!): String!
  }

  input createUser {
    title: String!
    description: String
    type: String!
  }
  
  input updateGoal {
    title: String
    description: String
    type: String
  }
`;

module.exports = userDefs;