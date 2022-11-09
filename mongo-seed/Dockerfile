FROM mongo

COPY init.json /init.json

CMD mongoimport --host db --db pokemon-api --collection pokemons  --type json --file /init.json --jsonArray