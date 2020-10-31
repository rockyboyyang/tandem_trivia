import React, { useEffect, useState, useContext } from 'react';
import { useHistory } from "react-router-dom";
import { AppContext } from '../context/AppContext'
import questions from "../assets/Apprentice_TandemFor400_Data.json"

const IntroModal = ({ playerAnswer, currentQuestion, setQuestionNumber, questionNumber, randomizeQuestions, setCurrentScore, currentScore }) => {
    const { playerName, setPlayerName } = useContext(AppContext)

    return (
        <div className="intro_modal">
            
        </div>
    );
}

export default IntroModal;
