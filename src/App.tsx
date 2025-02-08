import { useEffect, useState } from "react";
import './App.css';
import { FeedbackHeader } from './components/FeedbackHeader';
import { FeedbackOptions } from './components/FeedbackOptions';
import { STAT_OPTIONS_ARRAY } from './constants/StatOptions.ts';
import { INITIAL_FEEDBACK_STATE } from "./constants/InitialFeedbackState.ts";
import { Feedback } from "./constants/Feedback";
import { FeedbackStat } from "./components/FeedbackStat";
import { NoFeedbackNotification } from "./components/NoFeedbackNotification";



function App() {
  const [feedback, setFeedback] = useState(INITIAL_FEEDBACK_STATE);
  const [total, setTotal] = useState(0);
  const [positivePercentage, setPositivePercentage] = useState(0);
  
  const onFeedback = (e: { target: { innerText: string; }; }) => {
    setFeedback((prev: Feedback) => ({
      ...prev,
      [e.target.innerText.toLowerCase() as keyof Feedback]: prev[e.target.innerText.toLowerCase() as keyof Feedback] + 1
    }))
  };

  useEffect(() => {
    setTotal(feedback.good + feedback.neutral + feedback.bad);
    setPositivePercentage(Math.round((feedback.good / (feedback.good + feedback.neutral + feedback.bad)) * 100));
  }, [feedback]);


  return (
    <>
      <div className="app-container">
        <FeedbackHeader />
        <FeedbackOptions statOptions={STAT_OPTIONS_ARRAY} onLeaveFeedback={onFeedback} />
        {total > 0 ? (
            <FeedbackStat feedback={feedback} total={total} positivePercentage={positivePercentage} />
          ) : (
            <NoFeedbackNotification message="There is no feedback" />
          )
        }
      </div>
    </>
  )
}

export default App
