var express = require('express') //llamamos a Express
var app = express()               

var port = process.env.PORT || 8080  // establecemos nuestro puerto

app.get('/', function(req, res) {
  res.json({ mensaje: '¡Hola Mundo desde Github!' })   
})

app.get('/galletas', function(req, res) {
  res.json({ mensaje: '¡A comer galletas!' })  
})

app.get('/gaseosas', function(req, res) {
  res.json({ mensaje: '¡A beber gaseosas!' })  
})

app.get('/pizza', function(req, res) {
  res.json({ mensaje: '¡A comer pizza!' })  
})

app.post('/', function(req, res) {
  res.json({ mensaje: 'Método post' })   
})

app.delete('/', function(req, res) {
  res.json({ mensaje: 'Método delete' })  
})

// iniciamos nuestro servidor
app.listen(port)
console.log('API escuchando en el puerto ' + port)