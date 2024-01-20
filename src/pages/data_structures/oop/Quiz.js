import React from "react";
import quizData from "../../QuizApp/quizData";
import QuizComponent from "../../QuizApp/QuizComponent";

const quizStyle = {
    backgroundColor: '#FFFFFF',
    height: '500px',
};

const Quiz = () => {
    return (
        <div style={quizStyle}>
            <QuizComponent concept="Object Oriented Programming" questions={quizData.oop} />
        </div>
    );
}

export default Quiz;