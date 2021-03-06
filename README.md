##How to view this project

###Local

After building, find the `dist` folder in the project and open `index.html`

###Online

View on github at [http://m-coding.github.io/fe-04-optimization](http://m-coding.github.io/fe-04-optimization/)

##Build Tool Requirements

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
  * Windows Tip:
  * You see the error `Please try running this command again as root/Adminstrator`
  * Start [Git Bash](https://git-scm.com/downloads) as administrator (right-click and select _Run as adminstrator_)

##Build the Project

Make sure you satisfy the Build Tool Requirements first.

1. Navigate to the root of the project directory in your terminal.
2. Check that `node_modules` folder exists. If not, see step 3 under Build Tool Requirements.
4. Enter the command `gulp clean` to delete everything in the `dist` folder.
  * If you want to preview what files will be deleted, enter the command `gulp cleanDryRun` instead.
5. Next enter the command `gulp` and the project will be built in the `dist` folder.
  * You can review differences by comparing the `src` and `dist` folder.

##Optimizations

####index.html

1. Resized thumbnail images to be 100px by 62px
2. Resized large images to be a max width of 480px
3. Compressed the images
4. Removed optional analytics script
5. Inlined styles from `style.css` into the `<head>`
6. Minified inline styles
7. Add `media="print"` attribute for `print.css`
8. Minified print styles
9. Use [Web Font Loader](https://github.com/typekit/webfontloader) to load Google fonts

**_PageSpeed Insights_**: [Scored Above 90](https://developers.google.com/speed/pagespeed/insights/?url=http%3A%2F%2Fm-coding.github.io%2Ffe-04-optimization%2F&tab=desktop)

####pizza.html

1. Resized large images to be a max width of 360px
2. Add properties to the `.mover` class in `style.css`
  * Set width and height properties
  * Add `backface-visibility: hidden;` property
  * Add `transform: translateZ(0);` and `will-change: transform;` properties
3. Replace `querySelector` with `getElementById` in `resizePizzas`
4. Refactor `changePizzaSizes()` in `main.js` to prevent Force Synchronous Layout
  * Move `sizeSwitcher()` logic here and remove `determineDx()`
  * Use `getElementsByClassName` instead of `querySelectorAll`
  * Move constant variables outside for loops
  * Simplified loop logic
5. Refactor `updatePositions()` in `main.js` to reduce Scripting Time
  * Use `getElementsByClassName` instead of `querySelectorAll`
  * Save `scrollTop` variable outside loop
  * Save phase sequence values in an array
  * Use `transform` instead of `left` to set x-axis position of `pizza.png`
6. Refactor `DOMContentLoaded` event listener function
  * Declare variables outside of loop
  * Removed `height` and `width` properties, already defined in `.mover` class
  * Removed `basicLeft` and set `left` property
  * Use `getElementById` instead of `querySelector`
7. Minified `main.js`
