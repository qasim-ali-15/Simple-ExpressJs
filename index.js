const express = require('express')
const path = require('path')
const app = express()
const port = 3000

app.get('/name', (req, res) => {
  res.send('Hello World!' + req.params.name)
})

app.get('/hello', (req, res) => {
  res.send('Hello World!')
})

app.get('/about', (req, res) => {
  //res.send('About')
  //res.sendFile(path.join(__dirname,'index.html'))
  res.json({"Qasim":03})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})