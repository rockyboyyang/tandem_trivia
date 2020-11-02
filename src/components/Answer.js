import React from 'react';

const Answer = ({ answer, selectAnswer }) => {


    return (
        <div className={`answer_box`}>
            <div onClick={selectAnswer} value={answer} className="inner_answer_container" id={`answer_${answer}`}>{answer}</div>
        </div>
    );
}

export default Answer;
