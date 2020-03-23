import * as admin from 'firebase-admin';
import * as express from 'express';

const serviceAccount = require('../serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://{proyecto}.firebaseio.com'
});

//Creo referencio a la BBDD
const db = admin.firestore();

const app = express();

//======================================
// Obtener Usuarios
//======================================
app.get( '/usuarios', async ( req, res ) => {
    const ussRef   = db.collection( 'usuarios' );
    const docsSnap = await ussRef.get();
    const listUss  = docsSnap.docs.map( ( doc: any ) => doc.data() );

    res.json({
        ok: true,
        listUss
    });

});

module.exports = app;