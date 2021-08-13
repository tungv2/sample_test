import dotenv from 'dotenv'
import app from './server.js'

dotenv.config()

app.listen(process.env.PORT, function () {
	console.log(`Example app listening on port ${process.env.PORT}!`);
});