# pareto-home
This project is based on the ZURB Foundation Framework (similar to Bootstrap) to streamline the front-end developpement process.
This install uses the Node-powered Foundation Command-Line Tool with Gulp to compile pages, Sass, Javascript and compress images.

##Installation
Once you cloned the repository, first install Foundation CLI tool
```
npm install --global foundation-cli
```

Then you need to install all the required node modules from the package.json inside the repo
```
npm install
```

##Foundation CLI
To see the website in progress or build a production version, all the basic commands are here

https://github.com/zurb/foundation-cli#commands

##Editing
The prototyping files are all inside the ```src``` folder. This is where changes should be made.

The default layout is inside ```layouts```.

The homepage (and the others) are inside ```pages```.

Sections like the navigation, the footer and the menu are inside ```partials```.

Everyting else (JS, SCSS, images and fonts) are inside ```assets```.

##Production
Once we're happy with the results, we can compile the production files:
```foundation build```

They will all go inside ```dist```, nicely compressed and organized.

