/** @format */

const { Recipe } = require("../models");

const resolvers = {
  Query: {
    recipes: async () => {
      return Recipe.find();
    },
  },
};

module.exports = resolvers;
