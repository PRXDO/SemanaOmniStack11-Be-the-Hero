
const express = require('express');/*importando o modulo express para a variavel express, assim podendo usar as funcionalidades do express*/
const cors = require('cors');
const routes = require('./routes');/*importando as rotas */


const app = express();/*variavel que armazena a aplicação, que conterá as rotas e as funcionalidades*/

app.use(cors());
app.use(express.json());
app.use(routes);

/**
 * Rota / Recurso
 */

/**
 * Métodos HTTP:
 * 
 * GET: Buscar/Listar uma informação do back-end
 * POST: Criar uma informação no back-end
 * PUT: Alterar uma informação no back-end
 * DELETE: Deletar uma informação no back-end
 */

 /**
  * Tipos de parâmetros
  * 
  * Query Params:Parâmetros nomeados enviados na rota após "?" (Filtros, paginação)
  * Router Params:Parâmetros utilizados ´para identificar recursos
  * Request Body:Corpo da requiisção, utilizado para criar ou alterar recursos
  */

/**
 * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
 * NoSQL: MongoDB, CounchDB, etc
 */

 /**
  * Driver: SELECT * FROM users
  * Query Builder: table('users').select('*').where()
  */



app.listen(3333);/*a variavel está 'ouvindo' a porta 3333, assim podendo ser vista acessando localhost:3333*/

