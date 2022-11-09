const express = require('express');

const router = express.Router();

const {getPokemons, getPokemon, postPokemons} = require('../components/pokemon/controller');
const {postCaught, getCaught} = require('../components/caughtPokemon/controller');

const checkCaught = require('../middleware/checkCaught');

router.get('/pokemon', getPokemons);
router.post('/pokemon', postPokemons);

router.get('/caught', getCaught)
router.post('/caught', checkCaught, postCaught)

module.exports = router;
