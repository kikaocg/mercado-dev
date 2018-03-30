const firebase = require('firebase/app');
const Rebase = require('re-base');
require('firebase/database');
require('firebase/storage');

const config = {
    apiKey: "AIzaSyDS6h1ASq9pM2XlXsLwdU4_Apv0ly2KEXs",
    authDomain: "mercado-dev-9b056.firebaseapp.com",
    databaseURL: "https://mercado-dev-9b056.firebaseio.com",
    projectId: "mercado-dev-9b056",
    storageBucket: "gs://mercado-dev-9b056.appspot.com",
    messagingSenderId: "115574012439"
};

const app = firebase.initializeApp(config);
const base = Rebase.createClass(app.database());

export const storage = app.storage();
export default base;