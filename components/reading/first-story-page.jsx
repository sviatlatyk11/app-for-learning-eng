import React, { useState } from "react";
import Story1 from "../stories/story-1"
import { Link } from 'react-router-dom';

function FirstStoryPage() {
    const [selectedText, setSelectedText] = useState('');

    const handleMouseUp = () => {
        const text = window.getSelection().toString();
        console.log("Selected text:", text); // Check if text is captured
        setSelectedText(text);
    };

    return (
        <div className='main'>
            <h2 style={{ color: "red" }}>The adventures of Tom Sawyer</h2>
            <Story1 /> 
            <p>Selected Text: {selectedText}</p>
            <Link to="/quiz">
                <div className="quiz-box">Click here to attend the quiz</div>
            </Link>
        </div>
    );
} 

export default FirstStoryPage;
