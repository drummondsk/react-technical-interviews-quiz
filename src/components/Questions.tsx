import { Question } from "../types"
import Answers from "./Answers";
import Questions_module from './Questions.module.scss';
type Props = {
    question: Question;
    onSubmit: (correct: boolean) => void
}

function QuesitonComp(props: Props) {
    return <div className={Questions_module['ques-container']}>
        <h3 className={Questions_module.question}>{props.question.question}</h3>
        <Answers question={props.question} onSubmit={props.onSubmit} />
    </div>
}
export default QuesitonComp