import express, { Router } from "express";
import { GoogleGenerativeAI } from "@google/generative-ai";
const router = express.Router();

let API_KEY = "AIzaSyCrsdyjOBQJfzGmRrtFyynWRYBd0bVrKZs";

// Starting the genAI
const genAI = new GoogleGenerativeAI(API_KEY);

// Model for the text input
const model = genAI.getGenerativeModel({ model: "gemini-pro"});

async function run() {
    const prompt = "Give 3 prompts for people to take pictures together: one should be generic, and two should be in and around UCLA. Don't use a label of which prompt it is."
  
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    return text;
}

router.get('/', async(req, res) => {

    const text = await run();

    return res.send({
        message: 'Fetched AI prompts successfully',
        prompts: text
    })
})

export default router;

