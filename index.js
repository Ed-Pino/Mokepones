const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.send('Hola bb')
})

app.listen(8080, () => {
    console.log('Servidor funcionando')
})