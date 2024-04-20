const express = require('express')
const app = express()

import firebaseConfig from './firebase_config';

// Import firebase config to here. 

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);

app.get("/api", (req, res) => {
    res.json({
        "users": ["userOne", "userTwo", "userThree"]
    })
})