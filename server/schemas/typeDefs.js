/** @format */

const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Recipe {
    _id: ID
    recipeName: String!
    recipeIngredients: [String]!
    recipeDescription: String!
    category: [String]!
  }

  type Query {
    recipes: [Recipe]!
  }
`;

module.exports = typeDefs;
