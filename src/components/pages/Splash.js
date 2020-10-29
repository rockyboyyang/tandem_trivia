import React, { useEffect, useState } from 'react';
import { useHistory} from "react-router-dom";

const Splash = () => {
    
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
        </div>
    );
}

export default Splash;
