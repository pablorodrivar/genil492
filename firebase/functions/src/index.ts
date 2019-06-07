import * as functions from 'firebase-functions';

const firebaseHelper = require('firebase-functions-helper');
import * as admin from 'firebase-admin';
import * as express from 'express';
import * as bodyParser from "body-parser";

admin.initializeApp(functions.config().firebase);

const db = admin.firestore();

const app = express();
const main = express();

const userCollection = 'user';
const vEmailCollection = 'valid_email';

main.use('/api/v1', app);
main.use(bodyParser.json());
main.use(bodyParser.urlencoded({ extended: false }));

// webApi is your functions name, and you will pass main as 
// a parameter
export const webApi = functions.https.onRequest(main);

/*---------------------------USER-------------------------------*/

// Add new user
app.post('/user', (req, res) => {
    firebaseHelper.firestore
        .createNewDocument(db, userCollection, req.body);
    res.send('Create a new user');
})
// Update new user
app.patch('/user/:userId', (req, res) => {
    firebaseHelper.firestore
        .updateDocument(db, userCollection, req.params.userId, req.body);
    res.send('Update a new user');
})
// View a user
app.get('/user/:userId', (req, res) => {
    firebaseHelper.firestore
        .getDocument(db, userCollection, req.params.userId)
        .then((doc: any) => res.status(200).send(doc));
})

// View a user by email
app.get('/user/email/:email', (req, res) => {
    const queryArray = [['email', '==', req.params.email]];

    firebaseHelper.firestore.queryData(db, userCollection, queryArray)
    .then((docs: any) => res.status(200).send(docs))
    .catch((err: any) => res.status(400).send(err))
})

// View all users
app.get('/user', (req, res) => {
    firebaseHelper.firestore
        .backup(db, userCollection)
        .then((data: any) => res.status(200).send(data))
})
// Delete a user 
app.delete('/user/:userId', (req, res) => {
    firebaseHelper.firestore
        .deleteDocument(db, userCollection, req.params.userId);
    res.send('Document deleted');
})

/*---------------------------VALID_EMAIL-------------------------------*/

// Add new valid_email
app.post('/valid_email', (req, res) => {
    firebaseHelper.firestore
        .createNewDocument(db, vEmailCollection, req.body);
    res.send('Create a new valid_email');
})
// Update new valid_email
app.patch('/valid_email/:valid_emailId', (req, res) => {
    firebaseHelper.firestore
        .updateDocument(db, vEmailCollection, req.params.valid_emailId, req.body);
    res.send('Update a new valid_email');
})
// View a user
app.get('/valid_email/:valid_emailId', (req, res) => {
    firebaseHelper.firestore
        .getDocument(db, vEmailCollection, req.params.vEmailCollection)
        .then((doc: any) => res.status(200).send(doc));
})

// View a user by email
app.get('/valid_email/email/:email', (req, res) => {
    const queryArray = [['email', '==', req.params.email]];

    firebaseHelper.firestore.queryData(db, vEmailCollection, queryArray)
    .then((docs: any) => res.status(200).send(docs))
    .catch((err: any) => res.status(404).send(err))
})

// View a user by role
app.get('/valid_email/role/:role', (req, res) => {
    const queryArray = [['role', '==', req.params.role]];

    firebaseHelper.firestore.queryData(db, vEmailCollection, queryArray)
    .then((docs: any) => res.status(200).send(docs))
})

// View all valid_email
app.get('/valid_email', (req, res) => {
    firebaseHelper.firestore
        .backup(db, vEmailCollection)
        .then((data: any) => res.status(200).send(data))
})
// Delete a valid_email 
app.delete('/valid_email/:valid_emailId', (req, res) => {
    firebaseHelper.firestore
        .deleteDocument(db, vEmailCollection, req.params.valid_emailId);
    res.send('Document deleted');
})