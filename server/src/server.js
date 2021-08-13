import express from 'express'
import cors from 'cors'

import TestRoute from './spring/router/TestRoute.js'

// import bodyParser from 'body-parser'
import morgan from 'morgan'

var app = express();
app.use(express.json());
app.use(morgan('dev'))
// app.use(bodyParser.urlencoded({extended: true}))
app.use(express.urlencoded({ extended: false }));
app.use(cors())

// router
app.get('/', function (req, res) {
	res.send('Hello World!');
});

app.use('/api', TestRoute)

export default app