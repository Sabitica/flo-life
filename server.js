const express = require('express');
const mongoose = require('mongoose'); // our ORM
const bodyParser = require('body-parser');

const items = require('./routes/api/items');
const emotions = require('./routes/api/emotions');
const days = require('./routes/api/days');

const app = express();

// Bodyparser middleware 
app.use(bodyParser.json());

// DB Config 
const db = require('./config/keys').mongoURI;

// Connect to Mongo
mongoose
	.connect(db)
	.then(() => console.log('MongoDB Connected...'))
	.catch(err => console.log(err));

// prevents error on findOneByIdAndUpdate
// https://stackoverflow.com/questions/52572852/deprecationwarning-collection-findandmodify-is-deprecated-use-findoneandupdate
mongoose.set('useFindAndModify', false);

// Use Routes 
app.use('/api/items', items);
app.use('/api/emotions', emotions);
app.use('/api/days', days);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));


