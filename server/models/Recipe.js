/** @format */

const { Schema, model } = require("mongoose");

const recipeSchema = new Schema({
  recipeName: {
    type: String,
    required: true,
    trim: true,
  },
  recipeIngredients: {
    type: [String],
    required: true,
    trim: true,
  },
  recipeDescription: {
    type: String,
    required: "You need to leave a project!",
    maxlength: 600,
    trim: true,
  },
  recipeImg: {
    type: String,
    required: true,
  },
  category: {
    type: [String],
    required: true,
  },
});

const Recipe = model("Recipe", recipeSchema);

module.exports = Recipe;
