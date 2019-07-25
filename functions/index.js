const functions = require('firebase-functions');
const aofieeModule = require('./aofiee');

exports.helloWorld = functions.https.onRequest((request, response) => {
 response.send("Hello from Firebase!");
 console.log("my log");
});
exports.aofiee = functions.https.onRequest(aofieeModule.handler);