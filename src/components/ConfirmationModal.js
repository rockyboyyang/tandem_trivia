import React, { useEffect, useState, useContext } from 'react';
import { useHistory } from "react-router-dom";
import { AppContext } from '../context/AppContext'
import questions from "../assets/Apprentice_TandemFor400_Data.json"

const ConfirmationModal = () => {
    const { playerName, setPlayerName } = useContext(AppContext)


    return (
        <div className="confirm_modal">
            <div className="confirm_container">
                <div className="confirm_question">
                    <div className="confirm_question_inner_container">
                        Is that your final answer?
                    </div>
                </div>
                <div className="yes_no_container">
                    <div className="yes_no_button" id="no_button">𝗫</div>
                    <div className="yes_no_button" id="yes_button">✔</div>
                </div>
            </div>
        </div>
    );
}

export default ConfirmationModal;
