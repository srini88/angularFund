var express = require('express');  //grabs express libreary...and makes it available inside this file....

var path = require('path');  //needs path libreary..
var events = require ('./eventsController');
var app = express();  //creating express application

var rootPath = path.normalize(__dirname+'/../')  //points to the current dir  //scripts..then add a string..which will take meup and to the root directory..
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(rootPath+'/app'))  //serviing without processing..serve all files in app directory...

app.get('/data/event/:id', events.get);
app.post('/data/event/:id', events.save);
app.listen(8000);

console.log("Listening on port 8000...");