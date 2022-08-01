
// dotenv
require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT;
// 
const pokemon = require('./models/pokemon.js');
module.exports = pokemon;
//set up our view engine

app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
// index.jsx

//pokemon Index route
app.get('/pokemon/', (req, res) => {
    
    res.render('Index', { pokemon: pokemon });
    })
/* "I can view a list by id of pokemon name than image in the browser" */
    app.get('/show/:id', (req, res) => {
        res.render('Show', { //second param must be an object
            pokem: pokemon[req.params.id] 
        });
    });
    //"Show view shows req.params.id "

//"My server is set up and running"
app.listen(port, ()=>{
    console.log('Welcome to the Pokemon App!');
});