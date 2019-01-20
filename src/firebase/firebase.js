import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyB7ctU2cgXJ991SHgK1odB7zZfXaUpuFjY",
    authDomain: "expensify-react-course-a512d.firebaseapp.com",
    databaseURL: "https://expensify-react-course-a512d.firebaseio.com",
    projectId: "expensify-react-course-a512d",
    storageBucket: "expensify-react-course-a512d.appspot.com",
    messagingSenderId: "988747674931"
};

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default }; 