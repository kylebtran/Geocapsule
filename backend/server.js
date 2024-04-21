import express, { Router } from "express";
import uploadRouter from "./Controllers/upload-image.js"
import promptRouter from "./Controllers/getting-prompts.js";
import getAllImageUrls from "./Controllers/getting-images.js"
import cors from 'cors';
//import { initializeApp } from "firebase/app";

import bodyParser from "body-parser";
const app = express()

// Parse the request from the client into json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.get('/', (req, res) => {
    res.send('Firebase demo App of nodejs-db-demo Project.')
})

// POST request to upload a picture in the /upload url.
app.use('/upload', uploadRouter);

/*
    GETTING A PROMPT - GEMINI API
        - Based on location - UCLA
        - 3 prompts 
            -> generic
            -> specific
*/
app.use('/prompt', promptRouter);

// Get all the images from the database. 
app.get('/pictures', async (req, res) => {

    const imageUrls = await getAllImageUrls();
    res.send({
        message: "Successfully got all the images",
        urls: imageUrls
    })
});


const port = 3000 || process.env.port;
app.listen(port, ()=>{
    console.log(`Server is listening at port ${port}`);
})