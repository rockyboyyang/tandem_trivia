import React, { useEffect, useState, useContext } from 'react';
import { useHistory } from "react-router-dom";
import { AppContext } from '../context/AppContext'
import questions from "../assets/Apprentice_TandemFor400_Data.json"

const Answer = ({ answer, selectAnswer }) => {
    const {  playerName, setPlayerName } = useContext(AppContext)


    return (
        <div onClick={selectAnswer} value={answer} className={`answer_box`} id={`answer_${answer}`}>{answer}</div>
    );
}

export default Answer;
