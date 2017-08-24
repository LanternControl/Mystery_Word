const express = require('express');
const mustache = require('mustache-express');
const bodyParser = require('body-parser');
const session = require('express-session');
const port = 3000;
const app = express();

app.engine('mustache', mustache());
app.set('views', './views');
app.set('view engine', 'mustache');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(session({
 secret: 'nehhhh spoot',
 resave: false,
 saveUninitalized: true
}));

app.get('/', function(req, res){
 res.render('index');
});



app.listen(port, function(req, res){
 console.log('Starting express-session login app...');
});
