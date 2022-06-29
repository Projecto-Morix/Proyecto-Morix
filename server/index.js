require('dotenv').config();
const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const port = process.env.RPort;
const cors = require('cors');
//const Auth = require('./auth');

app.listen(
    port, () => {
        console.log(`Listening on http://localhost:${port}`);
    }
);

app.use(cors({ origin: "*" }));
app.use(express.json());
app.use(express.static(__dirname + '/public'));
app.use(cookieParser());
//app.use(Auth);
app.use(express.urlencoded({ extended: true }));

const routes = require('./routes/routes.js');
app.use('/api/v1', routes);