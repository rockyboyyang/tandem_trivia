import React, { useEffect, useState, useContext } from 'react';
import { useHistory} from "react-router-dom";
import { AppContext } from '../../context/AppContext'

const Splash = () => {
    const { questions, playerName, setPlayerName } = useContext(AppContext)


    const fetchQuestions = async () => {
        // const res = await fetch('../../assets/Apprentice_TandemFor400_Data.json')
        // .then(response => {
        //     console.log(response.json())
        // })
        // .then(res => {
        //     console.log(res)
        // })
        // const body = await res.json()
    }

    useEffect(() => {
        fetchQuestions()
    }, [])

    return (
        <div className="splash-page css-typing">
            <h1>Welcome to Ultimate Trivia!</h1>
            <input type="text" onChange={handleName} placeholder="Enter Name" value={name}></input>
            <div onClick={submitName} className="submit_name">Let's Play</div>
        </div>
    );
}

export default Splash;
