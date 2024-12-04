const admin = require('firebase-admin');
const serviceAccount = require('./serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://iconic-glider-316804.firebaseio.com', // Replace with your Firebase database URL
});

const db = admin.firestore();

module.exports = db;

