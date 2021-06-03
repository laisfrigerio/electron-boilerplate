const path = require('path')
const express = require('express')
const dotenv = require('dotenv')
const routes = require('./routes')

dotenv.config()

const app = express()

app.use(express.static(path.join(__dirname, '..', 'public')))
app.set('views', './resources/templates/pages')
app.set('view engine', 'pug')

app.use(routes)

const port = process.env.PORT || 3001

app.listen(port, () => {
	console.log(`Listing on port ${port}`)
})
