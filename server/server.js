const express = require('express')
const app = express()
require('./config/config')
const bodyParser = require('body-parser') //deprecated

// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }))
 
// parse application/json
app.use(express.json())
 
app.get('/usuario', function (req, res) {
  res.json('getUsuario')
})

app.post('/usuario', function (req, res) {
    let body = req.body

    if(body.nombre === undefined){
        res.status(400).json({
            ok: false,
            mensaje: 'El nombre es necesario'
        }) //codigo de respuesta http que quiero que se muestre en caso de
    }else{
        res.json({
            persona: body
        })
    }

})

app.put('/usuario/:id', function (req, res) {
    let id = req.params.id //Acceder al parámetro que se pasa en el request
    res.json({
      id
    })
})

app.delete('/usuario', (req, res)=>{
    res.json('delete')
})
 
app.listen(port, ()=>console.log('Servidor corriendo en el puerto',port))