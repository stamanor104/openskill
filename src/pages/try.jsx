import React, { useState } from 'react';
import axios from 'axios';

function App() {
    const [subject, setSubject] = useState('');
    const [topics, setTopics] = useState('');
    const [courseContent, setCourseContent] = useState('');
    const [exam, setExam] = useState('');

    // Function to generate course content
    const generateContent = async () => {
        try {
            const response = await axios.post('/api/generate-content', {
                subject: subject,
                topics: topics.split(','),
            });
            setCourseContent(response.data.courseContent);
        } catch (error) {
            console.error('Error generating course content:', error);
        }
    };

    // Function to generate exam based on course content
    const generateExam = async () => {
        try {
            const response = await axios.post('/api/generate-exam', {
                courseContent,
            });
            setExam(response.data.exam);
        } catch (error) {
            console.error('Error generating exam:', error);
        }
    };

    return (
        <div className="flex justify-center flex-col items-center h-screen text-black">
            <h1>AI Course Generator (Gemini API)</h1>

            {/* Input for subject and topics */}
            <div>
                <input
                    type="text"
                    placeholder="Enter subject (e.g., JavaScript)"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                /> <br />
                <input
                    type="text"
                    placeholder="Enter topics (comma-separated)"
                    value={topics}
                    onChange={(e) => setTopics(e.target.value)}
                />
                <button onClick={generateContent} className='bg-blue-500 hover:bg-blue-700 text-black font-bold py-2 border border-black  px-4 rounded'>Generate Course Content</button>
            </div>

            {/* Display the generated course content */}
            {courseContent && (
                <div>
                    <h2>Course Content</h2>
                    <p>{courseContent}</p>
                    <button onClick={generateExam}>Generate Exam</button>
                </div>
            )}

            {/* Display the generated exam */}
            {exam && (
                <div>
                    <h2>Exam Questions</h2>
                    <pre>{exam}</pre>
                </div>
            )}
        </div>
    );
}

export default App;
