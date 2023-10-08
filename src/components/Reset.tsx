
import App_module from '../App.module.scss';
import Reset_module from './Reset.module.scss';
import Classnames from 'classnames'; type Props = {
    totalQuestions: number;
    correctQuestions: number;
    onPress: () => void;
}

function Reset(props: Props) {
    return <div className={Reset_module['reset-container']}>
        <h1> You scored: {(props.correctQuestions / props.totalQuestions) * 100}% </h1>
        <button onClick={props.onPress} className={Classnames(App_module.appButton, Reset_module.resetBtn)}>Play Again</button>
    </div>
}
export default Reset