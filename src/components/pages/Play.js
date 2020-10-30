import React, { useEffect, useState, useContext } from 'react';
import { useHistory } from "react-router-dom";
import { AppContext } from '../../context/AppContext'
import Answer from '../Answer'
import questions from "../../assets/Apprentice_TandemFor400_Data.json"

const Play = () => {
    const { playerName, setPlayerName } = useContext(AppContext)
    const [currentQuestion, setCurrentQuestion] = useState({})
    const [questionNumber, setQuestionNumber] = useState(1)
    const [answer1, setAnswer1] = useState('')
    const [answer2, setAnswer2] = useState('')
    const [answer3, setAnswer3] = useState('')
    const [answer4, setAnswer4] = useState('')
    const [currentScore, setCurrentScore] = useState(0)
    const [notAskedQuestions, setNotAskedQuestions] = useState(questions)

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
        let playersAnswer = e.target.innerText
        if(playersAnswer === currentQuestion.correct) {
            let newTotal = currentScore + 1
            setCurrentScore(newTotal)
        } else {

        }
        randomizeQuestions()
        setQuestionNumber(questionNumber + 1)
    }

    useEffect(() => {
        randomizeQuestions()
    }, [])

    return (
        <div className="play-page css-typing">
            <div id="score">{currentScore}/10</div>
            <div id='question'>Question {questionNumber} {currentQuestion.question}</div>
            <div className="answers_container">
                <Answer answer={answer1} selectAnswer={selectAnswer}/>
                <Answer answer={answer2} selectAnswer={selectAnswer} />
                <Answer answer={answer3} selectAnswer={selectAnswer} />
                <Answer answer={answer4} selectAnswer={selectAnswer} />
            </div>
        </div>
    );
}

export default Play;
