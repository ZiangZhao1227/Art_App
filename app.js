'use strict';
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const passport = require('./utils/pass.js');
const rootRoute = require('./routes/rootRoute.js');
const catRoute = require('./routes/catRoute.js');
const userRoute = require('./routes/userRoute.js');
const authRoute = require('./routes/authRoute.js');
const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('uploads'));
app.use('/thumbnails', express.static('thumbnails'));

//routes
app.use('/', rootRoute);
app.use('/auth', authRoute);
app.use('/cat', passport.authenticate('jwt', {session: false}), catRoute);
app.use('/user', passport.authenticate('jwt', {session: false}), userRoute);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));



