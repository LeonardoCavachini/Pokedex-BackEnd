const Pokemon = require('../model');

exports.postPokemons = async (req, res) => {
  const { name, imageUrl } = req.body;

  if(!imageUrl || !name) {
    res.status(401).json({message:'imageUrl e name são requeridos'})
  }

  const pokemon = new Pokemon({
    name, 
    imageUrl
  });
  
  try {
    await pokemon.save()
    .then(res.status(201).json({ message: "Pokémon criado com Sucesso!!"}))
    .catch(err => console.log(err))
  } catch (error) {
    res.status(400).json({ message: error})
  }
 

};

exports.getPokemons = async (req, res) => {
  await Pokemon.find()
    .then(pokemons => {
      res.status(200).json( pokemons )
    })
    .catch(err => res.status(400).json(err.message ))
};
