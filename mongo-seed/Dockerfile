FROM mongo

COPY init.json /init.json

CMD mongoimport --host db --db MONGODB_POKEDEX --collection pokemons  --type json --file /init.json --jsonArray