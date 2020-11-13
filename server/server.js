// import { v4 as uuid } from "uuid";
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const port = 5000;
const app = express();


const token = 'esfeyJ1c2VySWQiOiJiMDhmODZhZi0zNWRhLTQ4ZjItOGZhYi1jZWYzOTA0NUIhkufemQifQ';

let nextId = 7;

const getRandomInt = (max) => {
	return Math.floor(Math.random() * Math.floor(max));
}

const randomEducation = () => {
	switch (getRandomInt(4)) {
		case (0):
			return "noFormalEducation";
		case (1):
			return "primary";
		case (2):
			return "secondary";
		case (3):
			return "university/college";
		default:
			return "primary";
	}
}
const randomCrossingFreq = () => {
	switch (getRandomInt(4)) {
		case (0):
			return "never";
		case (1):
			return "monthly";
		case (2):
			return "weekly";
		case (3):
			return "daily";
		default:
			return "never";
	}
}

const randomResidence = () => {
	switch (getRandomInt(4)) {
		case (0):
			return "254-KEN";
		case (1):
			return "255-TZA";
		case (2):
			return "250-RWA";
		case (3):
			return "256-UGA";
		default:
			return "254-KEN";
	}
}

const randomLanguage = () => {
	switch (getRandomInt(5)) {
		case (0):
			return "English";
		case (1):
			return "Swahili";
		case (2):
			return "Luganda";
		case (3):
			return "Kinyarwanda";
		case (4):
			return "Lukiga";
		default:
			return "English";
	}
}

const createRandomUser = (idIn) => {
	// nextId++;
	return (
		{
			id: idIn,
			gender: getRandomInt(2) === 0 ? "male" : "female",
			age: String(getRandomInt(7) * 10),
			education: randomEducation(),
			crossingFrequency: randomCrossingFreq(),
			primaryIncome: getRandomInt(2) === 0,
			growsOwnProduce: getRandomInt(2) === 0,
			countryOfResidence: randomResidence(),
			language: randomLanguage(),
		}
	)
}

let users = [];
for (let i = 0; i < 40; i++) {
	nextId = i;
	users.push(createRandomUser(i));
}

// console.log(users);

app.use(bodyParser.json());

app.use(cors());

function authenticator(req, res, next) {
	const { authorization } = req.headers;
	// const parsedAuth = JSON.parse(authorization);
	if (authorization === token) {
		next();
	} else {
		res.status(403).json({ error: 'User must be logged in to do that.' });
	}
}

app.post('/api/login', (req, res) => {
	const { username, password } = req.body;
	// console.log(username, password);
	if (username === 'user' && password === 'password') {
		req.loggedIn = true;
		res.status(200).json({
			payload: token
		});
	} else {
		res
			.status(403)
			.json({ error: 'Username or Password incorrect. Please see Readme' });
	}
});

app.post("/api/logout", authenticator, (req, res) => {
	req.loggedIn = false;
	res.status(200);
})

app.get('/api/users', authenticator, (req, res) => {
	setTimeout(() => {
		res.send(users);
	}, 1000);
});

app.get('/api/users/:id', authenticator, (req, res) => {
	// eslint-disable-next-line eqeqeq
	const friend = users.find(f => f.id == req.params.id);
	if (friend) {
		res.status(200).json(friend);
	} else {
		res.status(404).send({ msg: 'Friend not found' });
	}
});

app.post('/api/users', authenticator, (req, res) => {
	const friend = { id: getNextId(), ...req.body };

	users = [...users, friend];

	res.send(users);
});

app.put('/api/users/:id', authenticator, (req, res) => {
	const { id } = req.params;

	// eslint-disable-next-line eqeqeq
	const friendIndex = users.findIndex(f => f.id == id);

	if (friendIndex > -1) {
		const friend = { ...users[friendIndex], ...req.body };

		users = [
			...users.slice(0, friendIndex),
			friend,
			...users.slice(friendIndex + 1)
		];
		res.send(users);
	} else {
		res.status(404).send({ msg: 'Friend not found' });
	}
});

app.delete('/api/users/:id', authenticator, (req, res) => {
	const { id } = req.params;

	users = users.filter(f => f.id !== Number(id));

	res.send(users);
});

function getNextId() {
	return nextId++;
}

app.listen(port, () => {
	console.log(`server listening on port ${port}`);
});
