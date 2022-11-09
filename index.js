const express = require('express');
const swaggerUi = require('swagger-ui-express');
const cors = require('cors')
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const pokemonRouter = require('./routes/pokemon');
const swaggerDocs = require('./swagger.json');

const app = express();

app.use(cors())
app.use(bodyParser.json());
app.use('/image', express.static(`${__dirname}/image`));
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs))

app.use(pokemonRouter);

mongoose
  .connect('mongodb://db:27017/pokemon-api', {
    useNewUrlParser: true
  })
  .then(() => {
    app.listen(3000, () => console.log('server is running'))
  })
  .catch(error => {
    console.log(error);
  });
