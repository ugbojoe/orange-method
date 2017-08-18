#!/bin/bash

echo "Generating docs via asciidoctor."
asciidoctor -D docs -a stylesheet=orange-method.css -a stylesdir=.. adoc/*.adoc
git add docs
