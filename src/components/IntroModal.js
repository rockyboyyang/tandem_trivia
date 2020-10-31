import React, { useEffect, useState, useContext } from 'react';
import { useHistory } from "react-router-dom";
import { AppContext } from '../context/AppContext'
import questions from "../assets/Apprentice_TandemFor400_Data.json"

const IntroModal = ({ playerAnswer, currentQuestion, setQuestionNumber, questionNumber, randomizeQuestions, setCurrentScore, currentScore }) => {
    const { playerName, setPlayerName } = useContext(AppContext)

    const history = useHistory()

    const advanceToGame = () => {

        document.querySelector('.intro_modal').className = 'intro_modal transition-fade'
        setTimeout(() => {
            history.push('./play')
        }, 1250)
    }

    return (
        <div className="intro_modal">
            <div className="intro_modal_container">
                <div className="message_to_user_outer_container">
                    <div className="message_to_user_inner_container">
                        <span>Rules: Answer as much questions as you can in a round.
                         There are 10 questions in a round. After all the answers are revealed, 
                         you have 20 seconds to answer the question. When the timer expires, you will
                         forfeit the question.</span>
                        <br></br>
                        <br></br>
                        <span>Warning: If you refresh or leave the page during a round of Ultimate Trivia, you will lose your progress.</span>
                    </div>
                </div>
                <div onClick={advanceToGame} className="continue_button_container">
                    <div className="continue_button">Continue</div>
                </div>
            </div>
        </div>
    );
}

export default IntroModal;
