
import styles from './App.module.scss';
import QuesitonComp from './components/Questions';
import StatBar from './components/StatBar';
import questions from './questions.json'
import { Questions } from './types';
import { useState } from 'react';

function App() {
    const allQuestions = questions as Questions;
    const [currentQuestionIdx, setCurrentquestionIdx] = useState(0)
    const [correctAnswers, setCorrectAnswers] = useState(0)
    const [incorrectAnswers, setInCorrectAnswers] = useState(0)
    const [waitingToAdvance, setwaitingToAdvance] = useState(false)

    const onSubmit = (correct: boolean) => {
        if (correct) setCorrectAnswers(correctAnswers + 1);
        else setInCorrectAnswers(incorrectAnswers +1);

        setwaitingToAdvance(true);
    };
   
    const advavnceOnClick = () => {
        setwaitingToAdvance(false);
        if (allQuestions.questions.length >= currentQuestionIdx)
            setCurrentquestionIdx(currentQuestionIdx + 1);
    };

    return (
        <div className={styles.app}>
            <StatBar
                currentQuestion={currentQuestionIdx + 1}
                totalQuestions={allQuestions.questions.length}
                correct={correctAnswers}
                incorrect={incorrectAnswers}
            />
            <QuesitonComp
                question={allQuestions.questions[currentQuestionIdx]}
                onSubmit={onSubmit}
            />
            {waitingToAdvance && <button onClick={advavnceOnClick}>Next</button>}
        </div>
    );
}

export default App;
