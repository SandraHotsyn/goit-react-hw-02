import PropTypes from "prop-types";
import css from "./Feedback.module.css";

export default function Feedback({ feedback, total, positivePercentage }) {
  return (
    <div className={css.feedbackStat}>
      <p className={css.feedbackStatValue}>Good: {feedback.good}</p>
      <p className={css.feedbackStatValue}>Neutral: {feedback.neutral}</p>
      <p className={css.feedbackStatValue}>Bad: {feedback.bad}</p>
      <p className={css.feedbackStatValue}>Total: {total}</p>
      <p className={css.feedbackStatValue}>
        Positive Feedback: {positivePercentage}%
      </p>
    </div>
  );
}

Feedback.propTypes = {
  feedback: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }).isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
