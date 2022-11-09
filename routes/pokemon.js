const express = require('express');

const router = express.Router();

const {getPokemons, getPokemon, postPokemons} = require('../components/pokemon/controller');
const {postCaught, getCaught} = require('../components/caughtPokemon/controller');

router.get('/pokemon', getPokemons);
router.post('/pokemon', postPokemons);

router.get('/caught', getCaught)
router.post('/caught', postCaught)

module.exports = router;
