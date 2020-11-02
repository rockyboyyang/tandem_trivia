import React from 'react';
import { useHistory } from "react-router-dom";

const IntroModal = () => {

    const history = useHistory()

    const advanceToGame = () => {

        document.querySelector('.intro_modal').className = 'intro_modal transition-fade'
        setTimeout(() => {
            history.push('./play')
        }, 1250)
    }

    return (
        <div className="intro_modal">
            <div className="intro_modal_container">
                <div className="message_to_user_outer_container">
                    <div className="message_to_user_inner_container">
                        <div className="rules_text_container">
                            <span>Rules: Answer as much questions as you can in a round.
                            There are 10 questions in a round.</span>
                            <br></br>
                            <br></br>
                            <span>Warning: If you refresh or leave the page during a round of Ultimate Trivia, you will lose your progress.</span>
                        </div>
                    </div>
                </div>
                <div className="continue_button_container">
                    <div onClick={advanceToGame} className="continue_button">Continue</div>
                </div>
            </div>
        </div>
    );
}

export default IntroModal;
