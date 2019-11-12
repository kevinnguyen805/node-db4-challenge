const express = require('express')
const db = require('./recipesModel.js')
const router = express.Router()


router.get('/', (req,res) => {
     db.getRecipes().
     then(recipes => {
          res.json(recipes)
     })
})

router.get('/:id/shoppingList', (req,res) => {
     const {id} = req.params;
     db.getShoppingList(id)
     .then(list => {
          res.json(list)
     })
})

router.get('/:id/instructions', (req,res) => {
     const {id} = req.params;
     db.getInstructions(id)
     .then(instructions => {
          res.json(instructions)
     })
})













module.exports = router