# Project 1 Starter Repo using Simple Project Structure and CSS

## Introduction

This is a GitHub starter repo for Project 1 using Gulp, SASS, and [THD's UX StyleGuide](http://ux.homedepot.com/style-guide/).

You can fork this repository and then clone your fork to begin work on your project. Once you have the repository cloned you will need to install the npm and bower dependencies and use `gulp` to run the project via a simple HTTP server (`connect`). `gulp` is configured to run your project in developer mode or build your project for a production deployment. In developer mode `gulp` will watch your filesystem for changes and run any needed preprocessors (SASS).

## How To Use

### Step 1 - Fork This Repository

Use GitHub to fork this repository. You can then go into the forked repository's _settings_ and change the name to whatever you want.

### Step 2 - Clone The Fork

Use the _terminal_ to clone your new forked repository to your local computer.

```bash
git clone <url-to-my-project-1>.  # clone your fork of this repo
cd <my-project-1>                 # cd into the new project folder
```

### Step 3 - Install the Project Dependencies

3a. Use `yarn` (or `npm install`) to install the NodeJS dependencies for building and managing the project.


```bash
yarn                              # a better version of `npm install`
```

3b. Run the `update-lib.sh` to copy the ux-styleguide CSS library to a `lib` folder.

This step is needed because the `ux-styleguide` thinks we need all of these dependencies (like `gulp`) that we really don't need. To keep our git repository clean we don't want to include the `node_modules` directory but we do want to include the `ux-styleguide` since we are deploying to _GitHub Pages_.

```bash
./update-lib.sh
```

3c. Use `bower` to install the bower dependencies. Note that you can *skip* this step if you are not using jQuery or any other Bower managed dependencies.

```bash
bower install                     # installs jQuery and any other bower dependencies
```


### Step 4 - Test it out and get to work

```bash
atom .               # use `atom` to load the project into the Atom editor
open index.html.     # load the page into the default browser
```

Each time you edit a file in atom, save it and reload the browser page to see the results.


### Deploying to GitHub Pages

You can host a _live_ deployment of your project via GitHub Pages.

Simply enable GitHub Pages for your GitHub repository in your browser via the GitHub repo _Settings_ tab. In the "GitHub Pages" section set the "Source" to "master branch" and click "Save".

Your project will then be hosted at https://pages.github.homedepot.com/yourGitHubName/yourProjectName.

NOTE: This project is hosted [here](https://pages.github.homedepot.com/OrangeMethod/project-1-starter-simple-css/).
