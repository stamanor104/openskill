const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
app.use(bodyParser.json());

// Replace with your Gemini API Key
const GEMINI_API_KEY = process.env.API_KEY;

// Function to call Gemini API for generating course content
const generateCourseContent = async (subject, topics) => {
    const prompt = `Create a detailed course content on ${subject} covering topics like ${topics.join(", ")}.`;
    try {
        const response = await axios.post(
            'api/course',  // Hypothetical URL, replace with actual Gemini API endpoint
            {
                model: 'gemini-pro',  // Replace with appropriate model name
                prompt: prompt,
                max_tokens: 1500
            },
            {
                headers: {
                    'Authorization': `Bearer ${API_KEY}`,
                    'Content-Type': 'application/json'
                }
            }
        );
        return response.data.choices[0].text.trim();
    } catch (error) {
        console.error("Error generating course content:", error);
        throw new Error('Failed to generate course content');
    }
};

// Function to call Gemini API for generating exam questions
const generateExamQuestions = async (courseContent) => {
    const prompt = `Based on the following course content, generate 5 multiple-choice questions with answers:\n\n${courseContent}`;
    try {
        const response = await axios.post(
            'api/exam',  // Hypothetical URL, replace with actual Gemini API endpoint
            {
                model: 'gemini-pro',  // Replace with appropriate model name
                prompt: prompt,
                max_tokens: 1000
            },
            {
                headers: {
                    'Authorization': `Bearer ${API_KEY}`,
                    'Content-Type': 'application/json'
                }
            }
        );
        return response.data.choices[0].text.trim();
    } catch (error) {
        console.error("Error generating exam questions:", error);
        throw new Error('Failed to generate exam questions');
    }
};

// Endpoint to generate course content
app.post('/api/generate-content', async (req, res) => {
    const { subject, topics } = req.body;
    try {
        const courseContent = await generateCourseContent(subject, topics);
        res.json({ courseContent });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Endpoint to generate exam based on course content
app.post('/api/generate-exam', async (req, res) => {
    const { courseContent } = req.body;
    try {
        const exam = await generateExamQuestions(courseContent);
        res.json({ exam });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
