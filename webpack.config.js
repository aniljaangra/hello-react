const path = require('path');

module.exports = {
  entry : './public/app.jsx',
  output : {
   path : path.join(__dirname , 'public/dist'),
   filename : 'bundle.js'
 },
 resolve : {
   extensions : [ '.js' , '.jsx']
 },

 module : {
   loaders : [
     {
       loader : 'babel-loader',
       query : {
         presets : [ 'react' , 'es2015']
       },
       test : /\.jsx?$/,
       exclude : /(node_modules)/
     }
   ]
 }

}
