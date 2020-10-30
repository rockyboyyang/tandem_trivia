import React, { useEffect, useState, useContext } from 'react';
import { useHistory } from "react-router-dom";
import { AppContext } from '../context/AppContext'
import questions from "../assets/Apprentice_TandemFor400_Data.json"

const Answer = ({ answer, selectAnswer }) => {
    const {  playerName, setPlayerName } = useContext(AppContext)


    return (
        <div className={`answer_box`}>
            <div onClick={selectAnswer} value={answer} className="inner_answer_container" id={`answer_${answer}`}>{answer}</div>
        </div>
    );
}

export default Answer;
