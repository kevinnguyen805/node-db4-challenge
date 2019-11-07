const express = require('express');
const server = express();
const helmet = require('helmet')
const RecipesRouter = require('./recipes/recipesRouter.js')


server.use(express.json())
server.use('/api/recipes', RecipesRouter)

server.get('/', (req, res) => {
     res.send('Hello you are at the root')
})

module.exports = server;