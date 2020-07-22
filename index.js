var express = require('express');
var app = express();

//set view engine
app.set("view engine","jade");

app.get('/favicon.ico', (req, res) => res.status(204));


// Note: File name and language code must same as in project.
// Open http://localhost:5000/fileName/langiageCode
app.get('/:name?/:lang?', function (req, res) {
	var template = req.params.name || 'AccountInviteEmail';
	var language = req.params.lang || 'ENG';
	res.render(template, {languageCode: language});
});

var server = app.listen(5000, function () {
	console.log('Node server is running..');
});
