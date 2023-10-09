import React, { useState } from 'react';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './ComponentsCover/Section';
import { Notification } from './NothingIsChosen/Notification';
export function App() {
  let [good, setGood] = useState(0);
  let [neutral, setNeutral] = useState(0);
  let [bad, setBad] = useState(0);

  const obj = {
    good: good,
    neutral: neutral,
    bad: bad,
  };
  const handleClick = ({ target: { name } }) => {
    console.log(obj);
    if (name === 'good') {
      setGood(prev => (good = prev + 1));
    }
    if (name === 'neutral') {
      setNeutral(prev => (neutral = prev + 1));
    }
    if (name === 'bad') {
      setBad(prev => (bad = prev + 1));
    }
  };
  const countTotalFeedback = body => {
    let a = 0;
    for (const key in body) {
      a += body[key];
    }
    return a;
  };
  const countPositiveFeedbackPercentage = () => {
    return (
      (100 * good) /
      countTotalFeedback({ good: good, neutral: neutral, bad: bad })
    ).toFixed(0);
  };

  return (
    <div className="container">
      <Section title="Please leave feedbackd">
        <FeedbackOptions
          options={Object.keys({ good: good, neutral: neutral, bad: bad })}
          onLeaveFeedback={handleClick}
        />
      </Section>
      {!countTotalFeedback({ good: good, neutral: neutral, bad: bad }) ? (
        <Notification message="There is no feedback" />
      ) : (
        <Section title="Statistics">
          <Statistics
            title="Statistics"
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback({
              good: good,
              neutral: neutral,
              bad: bad,
            })}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        </Section>
      )}
    </div>
  );
}
