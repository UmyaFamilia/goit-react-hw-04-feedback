import { nanoid } from 'nanoid';
import css from './FeedbackOptions.module.css';
export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className={css.coverList}>
      <ul className={css.cover}>
        {options.map(a => {
          return (
            <li key={nanoid()}>
              <button name={a} onClick={onLeaveFeedback} className={css.button}>
                {a}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
