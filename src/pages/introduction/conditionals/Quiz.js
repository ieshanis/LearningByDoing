import React from "react";
import quizData from "../../QuizApp/quizData";
import QuizComponent from "../../QuizApp/QuizComponent";

const quizStyle = {
    backgroundColor: '#FFFFFF',
    height: '1660px',
};

const Quiz = () => {
    return (
        <div style={quizStyle}>
            <QuizComponent concept="Conditionals" questions={quizData.conditionals} />
        </div>
    );
}

export default Quiz;