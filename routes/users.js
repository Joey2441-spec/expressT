const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
	console.log(req.query.name);
	res.send('User');
});

router.get('/news', (req, res) => {
	res.render('users/new', { firstName: 'Joe' });
});

router.post('/', (req, res) => {
	const isValid = false;
	if (isValid) {
		users.push({ firstName: req.body.firstName });
		res.redirect(`/users/${users.length - 1}`);
	} else {
		console.log('error');
		res.render('users/new', { firstName: req.body.firstName });
	}
});

router
	.route('/:id')
	.get((req, res) => {
		console.log(req.user);
		res.send(`user get ${req.params.id}`);
	})
	.put((req, res) => {
		req.params.id;
		res.send(`user put ${req.params.id}`);
	})
	.delete((req, res) => {
		req.params.id;
		res.send(`user delete ${req.params.id}`);
	});

const users = [{ name: 'joe' }, { name: 'joe2' }];

router.param('id', (req, res, next, id) => {
	req.user = users[id];
	next();
});

module.exports = router;
