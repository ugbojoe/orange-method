#!/bin/bash

echo "Copying ux-styleguide to the lib folder."
echo "We do this because the node_modules directory has a lot of dependencies"
echo "that we don't need but the ux-styleguide project thinks we need them."
echo "Ultimately we want the ux-styleguide to be included in git and available"
echo "to our GitHub Pages deployment."

rm -rf lib
mkdir lib
cp -R node_modules/ux-styleguide lib

rm -rf lib/ux-styleguide/examples
