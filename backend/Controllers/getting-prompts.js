import express, { Router } from "express";
import { GoogleGenerativeAI } from "@google/generative-ai";
const router = express.Router();

let API_KEY = "AIzaSyA4LpEp8-U7TLPT186h2vIbdbLgzjG_UZg";

// Starting the genAI
const genAI = new GoogleGenerativeAI(API_KEY);

// Model for the text input
const model = genAI.getGenerativeModel({ model: "gemini-pro", 
        system_instruction:"Start each prompt with a verb, and return fun & safe prompts. Never use the word \"let's\" and don't use emojis. Be lighthearted."});

async function run() {
    const prompt = "Give 3 prompts for people to take pictures together: one should be generic, and two should be in and around UCLA. Don't use a label of which prompt it is. Make the generic prompt describe doing an activity outside."
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