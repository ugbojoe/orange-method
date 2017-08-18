#!/bin/bash

echo "Running app.js (promises)"
NODE_ENV=development node app.js

echo
echo "Running app-async-await.js"
NODE_ENV=development node app-async-await.js

