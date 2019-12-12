const router = require('express').Router();

const recipeDB = require('./recipeModal');

router.get('/', (req, res) => {
  recipeDB.getRecipes()
    .then(recipes => {
      if (recipes) {
        res.status(200).json(recipes);
      } else {
        res.status(404).json({ message: "No recipes found" });
      }
    })
    .catch(error => {
      res.status(500).json({ message: "Error getting recipes", error: error });
    })
});

module.exports = router;