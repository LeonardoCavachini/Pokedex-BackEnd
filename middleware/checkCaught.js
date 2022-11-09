const Caught = require('../components/caughtPokemon/model');


const checkCaught = async (req, res, next) => {
  const { name, imageUrl } = req.body;

  const caught = new Caught({
    name, 
    imageUrl
  });

  try {
    const pokemon = await Caught.findOne({ name: name})
    if (pokemon) {
      return res.status(401).json({ message: "Você já capturou esse pokemon"})
    }
    next()
  } catch (error) {
    res.status(400).json({ mesage: error})
  }

}

module.exports = checkCaught