const express = require('express');
const app = express();
const users = require('./routes/users');

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', logger, (req, res) => {
	res.render('./public/index');
});

app.use('/users', users);

function logger(req, res, next) {
	console.log(req.originalUrl);
	next();
}

app.listen(3000);
