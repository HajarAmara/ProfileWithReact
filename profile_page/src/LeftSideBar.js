import React from "react";
import "./App.css";
import Image1 from "./image1";
import MiddleRight from './MiddleRightSide';
import PersonalDetails from './PesronalDetails';
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




function Left() {
    return (
        <div>
            <div className="sentenceLetter">
                <Typewriter text="  Hello, I'm HAJAR, Welcome to my profile" loop />
            </div>
            <div className="leftBar">
                <div className="lcol ">
                    <h3 className="name-title">Hajar Amara</h3>
                    <Image1 /></div>
                <div className="mcol">
                    <MiddleRight />
                </div>
                <div className=" rcol">
                    <PersonalDetails />
                </div>
            </div>
            <div>
            </div>
        </div>
    );
}

export default Left;