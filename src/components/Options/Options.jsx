import PropTypes from "prop-types";
import css from "./Options.module.css";

export default function Options({
  updateFeedback,
  resetFeedback,
  totalFeedback,
}) {
  return (
    <div className={css.feedbackStats}>
      <button onClick={() => updateFeedback("good")}>Good</button>
      <button onClick={() => updateFeedback("neutral")}>Neutral</button>
      <button onClick={() => updateFeedback("bad")}>Bad</button>
      {totalFeedback > 0 && (
        <button className={css.resetButton} onClick={resetFeedback}>
          Reset
        </button>
      )}
    </div>
  );
}

Options.propTypes = {
  updateFeedback: PropTypes.func.isRequired,
  resetFeedback: PropTypes.func.isRequired,
  totalFeedback: PropTypes.number.isRequired,
};
