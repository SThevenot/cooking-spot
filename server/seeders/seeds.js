/** @format */
const db = require("../config/connection");
const { Recipe } = require("../models");
const recipeSeeds = require("./recipeSeeds.json");

db.once("open", async () => {
  await Recipe.deleteMany({});
  await Recipe.create(recipeSeeds);

  console.log("all done!");
  process.exit(0);
});
