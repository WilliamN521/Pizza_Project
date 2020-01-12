
const pgPromise = require("pg-promise");
//instancia de pg promise
const pgp = pgPromise({});
//parametros de conexion
const config = {
    host: 'localhost',
    port: '5432',
    database: 'Pizza',
    user: 'postgres',
    password: 'pgadmin'
}
//db deberia tener la instancia del servidor
const db = pgp(config);

//consulta a la base de datos
//la instancia conectada al a base sirve para hacer operaciones con la base
//.any: cunado hay varios registros y .want : solo cuando se va a hacer 
//instanciar o el resultado es un registro
db.any("select*from pizza").then(res => {console.log(res);});