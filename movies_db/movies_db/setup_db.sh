#!/bin/bash
DATABASE="moviesdb"
DB_USER="woowonpw"
PSQL_COMMAND="psql -U ${DB_USER} -d ${DATABASE} -c "

dropdb moviesdb
createdb moviesdb

psql -d moviesdb -f movies.sql

## Seed database
psql -d moviesdb -f movies_seed.sql

$PSQL_COMMAND "select count(*) from actors"
echo "Should return 2"

$PSQL_COMMAND "select count(*) from directors"
echo "Should return 1"

$PSQL_COMMAND "select count(*) from movies"
echo "Should return 1"

$PSQL_COMMAND "select count(*) from actors_movies"
echo "Should return 2"
