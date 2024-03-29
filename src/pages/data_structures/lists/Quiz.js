import React from "react";
import quizData from "../../QuizApp/quizData";
import QuizComponent from "../../QuizApp/QuizComponent";

const quizStyle = {
    backgroundColor: '#FFFFFF',
    height: '2800px',
};

const Quiz = () => {
    return (
        <div style={quizStyle}>
            <QuizComponent concept="Lists" questions={quizData.lists} />
        </div>
    );
}

export default Quiz;