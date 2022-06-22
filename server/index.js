const express = require('express');
const app = express();
require('dotenv').config();
const cookieParser = require('cookie-parser');
const port = process.env.RPort;
const router = require('./routes/routes.js');

app.listen(
    
    port, () => {
        console.log(`Listening on http://localhost:${port}`);
    }
);

app.use(express.json());
app.use(express.static(__dirname+'/public'));
app.use(cookieParser());
app.use(express.urlencoded({extended: true}));

const routes = require('./routes/routes.js');
app.use(routes);