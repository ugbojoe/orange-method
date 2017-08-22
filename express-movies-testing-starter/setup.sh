#!/bin/bash

dropdb express-movies-db
createdb express-movies-db
yarn migrate
yarn seeds

dropdb express-movies-test
createdb express-movies-test
yarn migrate-test
yarn seeds-test
