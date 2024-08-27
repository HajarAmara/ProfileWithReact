import React from "react";
import "./App.css";
import { useState, useEffect } from 'react';


const useTypewriter = (text, speed = 60) => {
    const [displayText, setDisplayText] = useState('');

    useEffect(() => {
        let i = 0;
        const typingInterval = setInterval(() => {
            if (i < text.length) {
                setDisplayText(prevText => prevText + text.charAt(i));
                i++;
            } else {
                clearInterval(typingInterval);
            }
        }, speed);

        return () => {
            clearInterval(typingInterval);
        };
    }, [text, speed]);

    return displayText;
};


const Typewriter = ({ text, speed }) => {
    const displayText = useTypewriter(text, speed);

    return <p>{displayText}</p>;
};


function Introduce() {
    return (
        <div>
            <div className="sentenceLetter">
                <Typewriter text="  Hello, I'm HAJAR, Welcome to my profile" loop />
            </div>
        </div>
    );
}

export default Introduce;