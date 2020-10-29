import React, { useEffect, useState, useContext } from 'react';
import { useHistory } from "react-router-dom";
import { AppContext } from '../context/AppContext'
import questions from "../assets/Apprentice_TandemFor400_Data.json"

const Answer = ({ answer, selectAnswer }) => {
    const {  playerName, setPlayerName } = useContext(AppContext)


    return (
        <div onClick={selectAnswer} className={`answer_box`} id={`answer_${answer}`}>
            <h1>{answer}</h1>
        </div>
    );
}

export default Answer;
