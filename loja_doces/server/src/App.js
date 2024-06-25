import express from "express"; //importado o express
import DoceController from "./Controllers/DoceController.js";

const server = express(); //iniciando o express

server.use(express.json()); //Configurando o json

server.get('/',(req,res)=>{
    res.status(200).json("Servidor Funcionando");
});

server.get('/categoria_doces', DoceController.read);
server.post('/categoria_doces', DoceController.create);
server.put('/categoria_doces/:id_categoria', DoceController.update);
server.delete('/categoria_doces/:id_categoria', DoceController.delete);

server.listen(5000);