require('dotenv').config()
const express = require('express')
const configViewEngine = require('./config/viewEngine')
const webRoutes = require('./routes/web')
const connection = require('./config/database')

const app = express()
const port = process.env.PORT || 8080
const hostname = process.env.HOST_NAME

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


configViewEngine(app)
// conffig static file
//routes
app.use('/', webRoutes)


app.listen(port, hostname, () => {
  console.log('Server is listening on port' + port)
})