#### GULP STARTER PROJECT
This project helps one build faster a Gulp project for either node or browser. 
This is just a starter project without any application code.

 **Project template architecture structure**
 ```
 .
 |--- dist
 |      |_public
 |          |
 |          |-assets
 |          |   |
 |          |   |-css 
 |          |   |-images 
 |          |   |-js 
 |          |-pages         
|--- src
 |      |_public
 |          |
 |          |-assets
 |          |   |
 |          |   |-sass 
 |          |   |   |-app.sass 
 |          |   |-images 
 |          |   |  |-logo.png 
 |          |   |-ts 
 |          |       |-index.js
 |          |       |-test-functions.js
 |          |-pages         
 |          |   |-index.html         
 | gulpfile.js
 | package.json
 | package-lock.json
 | readme.md
 | .gitignore
 
 ```
user sass+typescript files are place under `src/public/assets` respective folders. 
This can be modified in the gulpfile.js at the root folder.
##### MODULES INCLUDED
```
   "browserify": "^16.3.0",
    "gulp": "^4.0.2",
    "gulp-autoprefixer": "^6.1.0",
    "gulp-sass": "^4.0.2",
    "gulp-uglify": "^3.0.2",
    "tsify": "^4.0.1",
    "typescript": "^3.5.3",
    "vinyl-buffer": "^1.0.1",
    "vinyl-source-stream": "^2.0.0"
```
### Installation
You should have the latest node (with npm/npx) installed

- For web project, clone the `web branch`.
- The starter template does not include any framework or server. You will have to setup one.
- Run `npm install` to load the dependencies
- To run gulp default task + gulp watch, run `npm run dev`
- Also note, the TS bundle output (app.bundle.js) is not injected in the html.
