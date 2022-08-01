const express = require('express');

const { user, login, categories, post } = require('./routes');

const { BACK_PORT } = process.env
const PORT = BACK_PORT || 3366


const app = express();
app.use(express.json());

app.get('/', (_req, res, _next) => res.status(200).json({msg: 'Server is Up'}));

app.use('/user', user);
app.use('/login', login);
app.use('/categories', categories);
app.use('/post', post);

app.listen(PORT, () => {
  console.log('Application running on: ', PORT)
});