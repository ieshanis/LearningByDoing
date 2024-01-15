import React from "react";
import quizData from "../../QuizApp/quizData";
import QuizComponent from "../../QuizApp/QuizComponent";

const quizStyle = {
    backgroundColor: '#3344dd',
    height: '500px',
};

const Quiz = () => {
    return (
        <div style={quizStyle}>
            <QuizComponent concept="Operations" questions={quizData.operations} />
        </div>
    );
}

export default Quiz;