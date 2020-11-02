import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext'


const ConfirmationModal = ({ playerAnswer, currentQuestion, setQuestionNumber, questionNumber, randomizeQuestions, setCurrentScore, currentScore }) => {
    const { playerName } = useContext(AppContext)

    const click_on_no = () => {
        document.querySelector('.confirm_modal').style.display = "none"
    }

    const click_on_yes = () => {
        let yes_button = document.querySelector('#yes_button')
        let no_button = document.querySelector('#no_button')
        let message = document.querySelector('.confirm_question_inner_container')
        if(playerAnswer === currentQuestion.correct) {
            let newTotal = currentScore + 1
            setCurrentScore(newTotal)
            message.innerText = `Correct! The answer is ${currentQuestion.correct}`
            yes_button.style.display = 'none'
            no_button.style.display = 'none'
        } else {
            message.innerText = `That is incorrect! The answer is ${currentQuestion.correct}`
            yes_button.style.display = 'none'
            no_button.style.display = 'none'
        }

        setTimeout(() => {
            randomizeQuestions()
            setQuestionNumber(questionNumber + 1)
            document.querySelector('.confirm_modal').style.display = "none"
            yes_button.style.display = 'flex'
            no_button.style.display = 'flex'
            message.innerText = `Is that your final answer ${playerName}`
            if(questionNumber === 10) {
                document.querySelector('.gameplay-container').style.display = "none"
                document.querySelector('.end_game_modal').style.display = "flex"
            }
        }, 2500)
    }

    return (
        <div className="confirm_modal">
            <div className="confirm_container">
                <div className="confirm_question">
                    <div className="confirm_question_inner_container">
                        Is that your final answer {playerName}?
                    </div>
                </div>
                <div className="yes_no_container">
                    <div className="yes_no_button" id="no_button" onClick={click_on_no}>𝗫</div>
                    <div className="yes_no_button" id="yes_button" onClick={click_on_yes}>✔</div>
                </div>
            </div>
        </div>
    );
}

export default ConfirmationModal;
