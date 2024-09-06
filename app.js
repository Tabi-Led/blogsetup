const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

app.use(express.static('public'))

app.listen(port, (error) => {
	if (!error) {
		console.log(`Server running on port ${port}`);
	}
	else {
		console.log("Error occurred starting server.", error);
	}
});

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, 'public/html/index.html'));
});