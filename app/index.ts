import { ServiceTeste } from './services/service-teste.js';
import express, { Express, Request, Response } from 'express';
import { DbConfig } from './sequelize/dbConfig';
import { ServiceTeste2 } from './services/service-teste2.js';
import "reflect-metadata";
import  typesRegistered  from './IoCContainer/container.js'
import { Injector } from './decorators/IocDecorators.js';
const app: Express = express();
const port = 3000;

var db = new DbConfig();
db.startConnection();
let teste =Injector.Resolve<ServiceTeste2>(ServiceTeste2)
console.log(teste)
 teste.imprimir();
 teste.imprimir();

app.get('/', (req, res)=> {
    
    res.status(200).send('Im working');
})

app.listen(port, () => {
    console.log('Listening on port: ' + port);
})

