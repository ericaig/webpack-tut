# WEBPACK TUTORIAL
**Notes**
--
1. `mkdir newproject && cd newproject`
2. `npm init -y` to create package package.json file
3. `npm i -D webpack webpack-cli` : to install webpack and webpack command line interface. Remember to configure webpack.config.js file.
4. `touch webpack.config.js` in project's directory 
5. `npm i -D html-webpack-plugin html-loader` allows us to copmpile html file. Remember to configure webpack.config.js file.
6. `npm run build` or `npm run start:dev` (according to package.json scripts object. For example ```{"start:dev": "webpack-dev-server"}```)
7. `npm i -D webpack-dev-server` [https://github.com/webpack/webpack-dev-server](https://github.com/webpack/webpack-dev-server)
8. `npm i -D @babel/core babel-loader @babel/preset-env` : helps to compile javascript code to allow code compatibility on all browsers.
9. `npm i -D file-loader` [https://www.npmjs.com/package/file-loader](https://www.npmjs.com/package/file-loader)
10. `npm i -D node-sass style-loader css-loader sass-loader mini-css-extract-plugin` : helps to compile sass files