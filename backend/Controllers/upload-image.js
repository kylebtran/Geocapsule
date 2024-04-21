
// Needed technologies
// Express (Express backend for nodeJS)
// Firebase - Database for clustering pictures and storing images. 
// Multer - convert the image into binary to upload into firebase

import express, { Router } from "express";
import { initializeApp } from "firebase/app";
import { getStorage, ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import multer from "multer";
import firebaseConfig from "../Configurations/firebase_config.js";

const router = express.Router();
// Initialize a firebase application
initializeApp(firebaseConfig);

// Initialize cloud storage and get a reference to the service
const storage = getStorage();

// setting up multer as a middleware to grab photo uploads. 
const upload = multer({ storage : multer.memoryStorage() });

// Posting the picture to firebase when the user clicks upload button
router.post("/", upload.single("filename"), async(req, res) => {
    try {
        const dateTime = giveCurrentDateTime();
        let location = "UCLA";
        const storageRef = ref(storage, `files/${location+"/"+req.file.originalname + "         " + dateTime}`);

        // create file metadat including the content type
        const metadata = {
            contentType: req.file.mimetype,
        };

        // upload the file in the bucket storage
        const snapshot = await uploadBytesResumable(storageRef, req.file.buffer, metadata);

        // get the public url
        const downloadURL = await getDownloadURL(snapshot.ref);


        return res.send({
            message: 'file uploaded to firebase storage',
            name: req.file.originalname,
            type : req.file.mimetype,
            downloadURL: downloadURL
        })

    } catch (error) {
        return res.status(400).send(error.message);
    }

});

const giveCurrentDateTime = () => {
    const today = new Date();
    const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    const dateTime = date + ' ' + time;
    return dateTime;
}

export default router;