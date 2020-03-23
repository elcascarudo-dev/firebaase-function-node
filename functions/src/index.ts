//======================================
// Importación modulos Fiebase
//======================================
import * as functions from 'firebase-functions';

//======================================
// Importación módulos NodeJS
//======================================
import * as express from 'express';
import * as cors from 'cors';



//======================================
// Configuración Express
//======================================
const app = express();
app.use( cors( { origin: true } ) );



app.use( require('./rutas/index') );

//======================================
// Exporto express 
//======================================
export const api = functions.https.onRequest( app );