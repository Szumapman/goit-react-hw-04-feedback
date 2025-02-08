import css from './FeedbackOptions.module.css'

type FeedbackOptionsProps = {
    statOptions: string[];
    onLeaveFeedback: (e: { target: { innerText: string; }; }) => void;
}


export const FeedbackOptions = ({ statOptions, onLeaveFeedback }: FeedbackOptionsProps) => {
    return (
        <div className={css.feedbackOptions}>
            {statOptions.map((option) => (
                <button key={option} onClick={(e) => onLeaveFeedback({ target: { innerText: e.currentTarget.innerText } })}>
                    {option}
                </button>
            ))}
        </div>
    )
}