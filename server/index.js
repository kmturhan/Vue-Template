const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(cors());

const posts = require('./routes/api/posts');
const { post } = require('./routes/api/posts');


app.use('/api/posts',posts);
app.use('/api/',posts);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));