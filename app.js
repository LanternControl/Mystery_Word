const express = require('express');
const mustache = require('mustache-express');
const bodyParser = require('body-parser');
const session = require('express-session');
const fs = require('fs');
const data = fs.readFileSync("/usr/share/dict/words", "utf-8").toLowerCase().split("\n");
const port = 3000;
const app = express();

app.engine('mustache', mustache());
app.set('views', './views');
app.set('view engine', 'mustache');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

let randomWord = data[Math.floor(Math.random() * data.length)];
//thanks Nancy for ... operator to split string
let activeWord = [...randomWord];
let hiddenWord = [...randomWord];
let shownWord = hiddenWord.fill('');
let lettersGuessed = [];
let correctWords = [];
let guessesLeft = 8;

app.use(session({
 secret: 'nehhhh spoot',
 resave: false,
 saveUninitalized: true
}));

app.get('/', function(req, res){
 res.render('index');
});

app.post('/', function(req, res){

})



app.listen(port, function(req, res){
 console.log('Starting express-session login app...');
});
