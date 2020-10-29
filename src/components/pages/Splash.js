import React, { useEffect, useState, useContext } from 'react';
import { useHistory} from "react-router-dom";
import { AppContext } from '../../context/AppContext'

const Splash = () => {
    const { questions, playerName, setPlayerName } = useContext(AppContext)

    const history = useHistory()

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

    const handleName = (e) => {
        e.preventDefault()
        setPlayerName(e.target.value)
    }

    const playGame = (e) => {
        e.preventDefault()
        
        if(playerName === '') {
            alert('Please enter your name contestant!')
            return
        }

        // Checks if the user only entered spaces
        let onlySpace = true
        for(let char of playerName) {
            if(char !== ' ') onlySpace = false
        }
        
        if(onlySpace) {
            alert('Your name can\'t only contain spaces!')
            return
        }

        // Deletes spaces until we get to a first char
        // For example: "       Rocky" = "Rocky"
        for(let i = 0; i < playerName.length; i++) {
            if(playerName[i] !== ' ') { 
                let newStr = playerName.slice(i)
                setPlayerName(newStr)
                break;
            }
        }

        console.log(playerName)
        history.push('./play')
    }

    useEffect(() => {
        // fetchQuestions()
    }, [])

    return (
        <div className="splash-page css-typing">
            <h1>Welcome to Ultimate Trivia!</h1>
            <input type="text" onChange={handleName} placeholder="Enter Name"></input>
            <div onClick={playGame} className="play_game_button">Let's Play</div>
        </div>
    );
}

export default Splash;
