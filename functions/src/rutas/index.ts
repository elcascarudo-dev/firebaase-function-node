import * as express from 'express';
const app = express();


app.use( require( './usuarios' ) );



module.exports = app;