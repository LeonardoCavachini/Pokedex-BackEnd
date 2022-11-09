const Caught = require('../model/index');

exports.postCaught = async (req, res) => {
  const { name, imageUrl } = req.body;

  if(!imageUrl || !name) {
    res.status(405).json({message:'imageUrl e name são requeridos'})
  }

  const caught = new Caught({
    name, 
    imageUrl
  });

  try {
    const pokemon = await Caught.findOne({ name: name})
    if (pokemon) {
      return res.status(401).json({ message: "Você já capturou esse pokemon"})
    }
  } catch (error) {
    res.status(400).json({ mesage: error})
  }
  
  await caught.save()
  .then(res.status(201).json({ message: "Pokémon capturado com sucesso!"}))
  .catch(err => console.log(err))
};

exports.getCaught = async (req, res) => {
  await Caught.find()
    .then(caught => {
      res.status(200).json( caught )
    })
    .catch(err => res.status(200).json(err.message ))
};