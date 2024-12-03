const express = require('express')
const path = require('path')
const app = express()

//config Template Engine    
app.set('views', path.join(__dirname,"view") )
app.set('view engine', 'ejs')

app.get('/views', (req, res) => {
  res.send('hello world')
  res.render('view')
})

app.listen(3000, () => {
  console.log('Server is listening on port 3000')
})  