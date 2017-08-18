**ux-styleguide**
===================
Global compilation of all available UX CSS packages in one place.  

[View Demo](https://pages.github.homedepot.com/ux/ux-styleguide/index.html)  


Installation
===================  

**To utilize CSS via URL**
- For **CURRENT VERSION** include `https://pages.github.homedepot.com/ux/ux-styleguide/dist/ux-styleguide.min.css` in your project  
- For **SPECIFIC VERSION (starting with 1.6.1)** include `https://pages.github.homedepot.com/ux/ux-styleguide/dist/VERSION/ux-styleguide.min.css` in your project

**To utilize JS via URL**
- For **CURRENT VERSION** include `https://pages.github.homedepot.com/ux/ux-styleguide/dist/ux-styleguide.min.js` in your project  
- For **SPECIFIC VERSION (starting with 1.11.2)** include `https://pages.github.homedepot.com/ux/ux-styleguide/dist/VERSION/ux-styleguide.min.js` in your project

**To install via NPM**
- Run `npm install ux-styleguide --save-dev`
    - Ensure your npm registry is pointing to https://npm.artifactory.homedepot.com/artifactory/api/npm/npm

**To install via Bower**
- Run `bower install ux-styleguide --save-dev`
    - Run `npm install -g bower-art-resolver` and add `resolvers` array to `.bowerrc`
    - Ensure your bower registry is pointing to https://bower.artifactory.homedepot.com/artifactory/api/bower/bower
    - Please reference this project's `.bowerrc` for an example

**After installing perform the following**
- Include `dist/ux-styleguide.min.css` for CSS (either in a `<style>` tag or compiled with other files) or use files located in `src` for SASS (if you want to make further modifications)
- Include `dist/ux-styleguide.min.js` for JS (either in a `<script>` tag or compiled with other files)
- **OPTIONAL**: `dist/ux-styleguide.css`, an un-minified CSS file is available to use instead of minified version
- **OPTIONAL**: `src/base.scss`, source sass files combined into one file

**To run locally from GitHub**
- Run `npm install`
    - Ensure your npm registry is pointing to https://npm.artifactory.homedepot.com/artifactory/api/npm/npm
- Run `gulp` to generate un-minified `ux-styleguide.css`, minified `ux-styleguide.min.css` CSS from SASS files, and minified `ux-styleguide.min.js` JS file.
