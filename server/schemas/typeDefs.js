/** @format */

const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Project {
    _id: ID
    recipeName: String!
    recipeIngredients: [String]!
    recipeDescription: String!
    recipeImg: String!
    category: [String]!
  }

  type Query {
    projects: [Project]!
  }
`;

module.exports = typeDefs;
