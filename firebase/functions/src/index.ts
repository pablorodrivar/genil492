import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

admin.initializeApp();

const cors = require("cors")({origin: true});
const Busboy = require('busboy');
const os = require("os");
const path = require("path");
const gcconfig = {
    projectId: "genil-api",
    keyFilename: "fb-cloud-functions-demo-firebase-adminsdk-km39q-405896eddb.json"
  };
const gcs = require("@google-cloud/storage")(gcconfig);

export const helloWorld = functions.https.onRequest(async (req, res) => {
    res.send("Hello World!")
});

/*export const onPruebaUserUpdate = functions.firestore.document("user/prueba").onUpdate(change => {
    const after = change.after.data();
    const payload = {
        data: {
            temp: String(after.temp),
            conditions: after.conditions
        }
    }

    return admin.messaging().sendToTopic("user/prueba", payload);
});*/

export const getUser = functions.https.onRequest(async (req, res) => {
    try{
        const snapshot = await admin.firestore().doc('user/prueba').get()
        const data = snapshot.data();
        res.send(data);
    }catch(error) {
        console.log(error)
        res.status(500).send(error)
    }
});

export const getFeed = functions.https.onRequest(async (req, res) => {
    const docs = await admin.firestore().collection('user').limit(10).get();
    res.send(docs.docs.map(doc => doc.data()))
});

exports.uploadFile = functions.https.onRequest((req, res) => {
    /*cors(req, res, (request, response) => {
        if(request.method !== 'POST') {
            return res.status(500).json({
                message: 'Not allowed'
            })
        }

        const busboy = new Busboy({headers: request.headers});
        let uploadData = null;
        busboy.on('file', (fieldname, file, filename, encoding, mimetype) => {
            const filepath = path.join(os.tmpdir(), filename);
            uploadData = {file: filepath, type: mimetype};

        });

        busboy.on('finish', () => {
            const bucket = gcs
        });

        response.status(200).json({
            message: 'It worked!'
        });
    }); */  
});