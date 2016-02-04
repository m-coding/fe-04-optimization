###Run the Project

Find the `dist` folder in the project and open `index.html`

###Re-build the Project

Steps to re-build the project:

1. Make sure you satisfy the Build Tool Requirements first.
2. Navigate to the root of the project directory.
3. In your terminal, enter the command `gulp clean` to delete everything in the `dist` folder.
  * If you want to preview what files will be deleted first, enter the command `gulp cleanDryRun` instead.
4. Next enter the command `gulp` and the project will be re-built in the `dist` folder.

###Build Tool Requirements

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

###Optimizations

####index.html

1. Resized thumbnail images to be 100px by 62px
2. Resized large images to be a max width of 480px
3. Compressed the images
4. Removed optional analytics script
5. Inlined `style.css`
6. Minified inline styles
7. Add "print" media attribute for `print.css`
8. Minified print styles
9. Use [Web Font Loader](https://github.com/typekit/webfontloader) to load Google fonts

**_PageSpeed Insights_**: [Scored Above 90](https://developers.google.com/speed/pagespeed/insights/?url=http%3A%2F%2Fm-coding.github.io%2Ffe-04-optimization%2F&tab=desktop)

####pizza.html

1. Resized large images to be a max width of 360px
2. Refactor `changePizzaSizes()` in `main.js` to gather layout properties first and then batch style changes to prevent Force Synchronous Layout
3. Refactor `updatePositions()` in `main.js` to reduce Scripting Time
4. Minified `main.js`
