const Caught = require('../components/caughtPokemon/model');


const checkCaught = async (req, res, next) => {
  const { name } = req.body;

  try {
    const pokemon = await Caught.findOne({ name: name})
    if (pokemon) {
      return res.status(200).json({ message: "Você já capturou esse pokemon"})
    }
    next()
  } catch (error) {
    res.status(500).json({ mesage: error})
  }

}

module.exports = checkCaught