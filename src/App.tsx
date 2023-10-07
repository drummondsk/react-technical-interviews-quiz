
import styles from './App.module.scss';
import StatBar from './components/StatBar';
import questions from './questions.json'
import { Questions } from './types';
import { useState } from 'react';

function App() {
    const allQuestions = questions as Questions;
    const [currentQuestionIdx, setCurrentquestionIdx] = useState(0)
    const [correctAnswers, setCorrectAnswer] = useState(0)
    const [incorrectAnswers, setInCorrectAnswer] = useState(0)

    return <div>
        <StatBar 
            currentQuestion={currentQuestionIdx + 1} 
            totalQuestions={allQuestions.questions.length}
            correct={correctAnswers}
            incorrect={incorrectAnswers} 
        />
    </div>;
}

export default App;
