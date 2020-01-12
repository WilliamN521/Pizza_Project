//instanciar e lservidor 
const express = require("express");
// no necesita instalación, suele venir con servidores
const bodyParser = require("body-parser"); 
const { graphqlExpress, graphiqlExpress } = require("graphql-server-express");
//variables 
const PORT = 3000;
const endPoint = '/pizza_api';
const schema = {};

//instanciar servidor 
let server = express();
//a la variable server ele pongo en uso y como parametro endpoint
//body parser con formato json y necesito con que motor hare la isntancia del servidro 
//graphql eprres ejecuta api de una forma normal utilizan o el protocotocl http
// graphi es un cliente embebdio que tiene el servidor graphql, sirve para instalar un 
// cliente que haga consultas a un servidor, 
server.use(endPoint, bodyParser.json(), graphqlExpress({
    schema
}));

/*server.use('/graphiql', graphiqlExpress({
    schema
}));*/

server.use('/graphiql', graphiqlExpress({
    endpointURL: endPoint,
}));

server.listen(PORT, () => {
    //console.log("Server Ejecutando");
    console.log('GraphQL API listen in http://localhost:' + PORT + endPoint);
    console.log('GraphiQL listen in http://localhost:' + PORT + '/graphiql');
})

//const { db } = require("./cnn")

console.log("Hola Mundo JS")