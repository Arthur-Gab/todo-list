const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

mongoose.connect(
	'mongodb+srv://arthur:mongoDBAPI@cluster0.zgpreiu.mongodb.net/todoList?retryWrites=true&w=majority'
);

const app = express();

app.use(express.json());
app.use(routes);

app.listen(3333, () => {
	console.log('Server running on port 3333');
});
