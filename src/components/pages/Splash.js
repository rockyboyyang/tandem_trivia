import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext'
import IntroModal from '../IntroModal'

const Splash = () => {
    const { playerName, setPlayerName } = useContext(AppContext)

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

        let splashElement = document.querySelector('.splash-page')
        splashElement.className = splashElement.className + ' transition-fade'

        setTimeout(() => {
            document.querySelector('.intro_modal').style.display = "flex"
            splashElement.style.display = 'none'
        }, 1000)

        setTimeout(() => {
            document.querySelector('.intro_modal').className += ' transition-fade-in'
        }, 1500)
    }

    return (
        <>
            <IntroModal />
            <div className="splash-page">
                <h1>Ultimate Trivia!</h1>
                <form>
                    <input type="text" onChange={handleName} placeholder="Enter Name"></input>
                    <button onClick={playGame} className="play_game_button">Play</button>
                </form>
            </div>
        </>
    );
}

export default Splash;
