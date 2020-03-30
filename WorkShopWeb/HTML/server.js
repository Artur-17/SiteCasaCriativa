//   usei o express para criar e configurar meu servidor
const express = require("express")
 const server = express()

// configurar arquivos estáticos (css, scripts)
server.use(express.static("public"))



 // criei uma rota /
// e capturo o pedido do cliente para responder

server.get("/", function (req, res) {
    return res.sendFile(__dirname + "/index.html")
    
})

server.listen(3000)


