const express = require('express');
const app = express();
require('dotenv').config();
const cookieParser = require('cookie-parser');
const port = process.env.RPort;
const router = require('./routes/routes.js');
const cors = require('cors');
<<<<<<< HEAD

=======
>>>>>>> e6e1b8b843efc79a05e7e09705a29cdfe94701d8
app.listen(
    
    port, () => {
        console.log(`Listening on http://localhost:${port}`);
    }
);
<<<<<<< HEAD

app.use(cors({origin: '*'}));
=======
app.use(cors({origin:"*"}));
>>>>>>> e6e1b8b843efc79a05e7e09705a29cdfe94701d8
app.use(express.json());
app.use(express.static(__dirname+'/public'));
app.use(cookieParser());
app.use(express.urlencoded({extended: true}));

const routes = require('./routes/routes.js');
app.use(routes);