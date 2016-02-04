####Run the Project

Find the `dist` folder in the project and open `index.html`

####Re-build the Project

Steps to re-build the project:

1. Make sure you satisfy the Build Tool Requirements first.
2. In your terminal, enter the command `gulp clean` to delete everything in the `dist` folder.
  * If you want to preview what files will be deleted first, enter the command `gulp cleanDryRun` instead.
3. Next enter the command `gulp` and the project will be re-built in the `dist` folder.

####Build Tool Requirements

1. [Node.js](https://nodejs.org/en/download/)
  * Check it is properly installed:
  * `node -v`
  * `npm -v`
2. [GraphicsMagick](http://www.graphicsmagick.org/download.html)
  * Required for `gulp-imagemin`
  * Check it is properly installed:
    * `gm -version`
3. [Gulp](https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md)
  * Navigate to the project directory (where the `gulpfile.js` is located).
  * In your terminal enter the command:
    * `npm install`
    * This will install all modules listed as dependencies in `package.json`
