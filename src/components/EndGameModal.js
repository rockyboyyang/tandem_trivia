import React, { useEffect, useState, useContext } from 'react';
import { useHistory } from "react-router-dom";
import { AppContext } from '../context/AppContext'
import questions from "../assets/Apprentice_TandemFor400_Data.json"

const EndGameModal = ({ currentScore }) => {

    // { playerAnswer, currentQuestion, setQuestionNumber, questionNumber, randomizeQuestions, setCurrentScore, currentScore }
    const { playerName, setPlayerName } = useContext(AppContext)

    const history = useHistory()

    const playAgain = () => {

    }

    const toSplash = () => {

    }

    return (
        <div className="end_game_modal">
            <div className="end_game_container">
                <div className="end_game_question">
                    <div className="end_game_inner_container">
                        Game Over {playerName}! Your score was {currentScore} / 10
                    </div>
                </div>
                <div className="play_again_container">
                    <div className="quit_play_again_button" id="quit_button" onClick={toSplash}>Quit</div>
                    <div className="quit_play_again_button" id="play_again_button" onClick={playAgain}>Play Again</div>
                </div>
            </div>
        </div>
    );
}

export default EndGameModal;
