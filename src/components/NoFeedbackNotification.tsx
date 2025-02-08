import css from './NoFeedbackNotification.module.css'

export const NoFeedbackNotification = ({ message }: { message: string }) => {
    return (
        <div className={css.noFeedback}>
            <p>{ message }</p>
        </div>
    )
}