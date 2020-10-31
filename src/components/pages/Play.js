import React, { useEffect, useState, useContext } from 'react';
import { useHistory } from "react-router-dom";
import { AppContext } from '../../context/AppContext'
import Answer from '../Answer'
import questions from "../../assets/Apprentice_TandemFor400_Data.json"
import ConfirmationModal from '../ConfirmationModal'

const Play = () => {
    const { playerName, setPlayerName } = useContext(AppContext)
    const [currentQuestion, setCurrentQuestion] = useState({})
    const [questionNumber, setQuestionNumber] = useState(1)
    const [playerAnswer, setPlayerAnswer] = useState('')
    const [answer1, setAnswer1] = useState('')
    const [answer2, setAnswer2] = useState('')
    const [answer3, setAnswer3] = useState('')
    const [answer4, setAnswer4] = useState('')
    const [currentScore, setCurrentScore] = useState(0)
    const [notAskedQuestions, setNotAskedQuestions] = useState(questions)

    const history = useHistory()

    function randomIntFromInterval(min, max) { // min and max included 
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    const randomizeQuestions = () => {
        let questions = notAskedQuestions
        let randomNum = randomIntFromInterval(0, questions.length - 1)
        console.log(questions)
        console.log(randomNum)
        console.log(questions[randomNum])
        let answers = [questions[randomNum].correct, ...questions[randomNum].incorrect]
        

        let len = answers.length
        let max = 3

        // this always puts the answers in different positions
        let currentQuestion = questions[randomNum]
        for(let i = 0; i < len; i++) {
            let randomAnswerNum = randomIntFromInterval(0, max)
            if (i === 0) setAnswer1(answers[randomAnswerNum])
            if (i === 1) setAnswer2(answers[randomAnswerNum])
            if (i === 2) setAnswer3(answers[randomAnswerNum])
            if (i === 3) setAnswer4(answers[randomAnswerNum])
            answers.splice(randomAnswerNum, 1)
            max--
        }
        setCurrentQuestion(currentQuestion)
        questions.splice(randomNum, 1)
        setNotAskedQuestions(questions)
    }

    const selectAnswer = (e) => {
        e.preventDefault()
        let playerAnswer = e.target.innerText
        setPlayerAnswer(playerAnswer)

        document.querySelector('.confirm_modal').style.display = "flex"
    }

    useEffect(() => {
        randomizeQuestions()
        document.querySelector('.gameplay-container').style.opacity = '1'
        if(!playerName) history.push('../')
    }, [])

    return (
        <>
            <ConfirmationModal playerAnswer={playerAnswer} currentQuestion={currentQuestion} setQuestionNumber={setQuestionNumber} questionNumber={questionNumber} randomizeQuestions={randomizeQuestions} setCurrentScore={setCurrentScore} currentScore={currentScore}/>
            <div className="play-page">
                <div className="gameplay-container transition-fade-in">
                    <div className="question_score_container">
                        <div id="score">Score: {currentScore}/10</div>
                        <div id="question_number"><h1>Question {questionNumber}</h1></div>
                        <div className="question_container">
                            <div id='question'>{currentQuestion.question}</div>
                        </div>
                    </div>
                    <div className="answers_container">
                        <Answer answer={answer1} selectAnswer={selectAnswer}/>
                        <Answer answer={answer2} selectAnswer={selectAnswer} />
                        <Answer answer={answer3} selectAnswer={selectAnswer} />
                        <Answer answer={answer4} selectAnswer={selectAnswer} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Play;
