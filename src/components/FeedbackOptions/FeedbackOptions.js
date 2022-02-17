import React from 'react';
import './FeedbackOptions.css';
import propTypes from 'prop-types';

const FeedbackOptions = ({ onLeaveFeedback }) => (
  // <div className="containerBtn">

  <ul className="sectionBtn">
    <li>
      <h3>Good</h3>
      <button
        className="feedbackBtn"
        type="button"
        name="good"
        onClick={onLeaveFeedback}
      >
        <img
          className="iconBtn iconBtn__good"
          name="good"
          src="https://cdn-icons-png.flaticon.com/512/927/927567.png"
          alt="emoji good"
        />
      </button>
    </li>
    <li>
      <h3>Neutral</h3>
      <button
        className="feedbackBtn"
        type="button"
        name="neutral"
        onClick={onLeaveFeedback}
      >
        <img
          className="iconBtn iconBtn__neutral"
          name="neutral"
          src="https://cdn-icons-png.flaticon.com/512/927/927557.png"
          alt="emoji neutral"
        />
      </button>
    </li>
    <li>
      <h3>Bad</h3>
      <button
        className="feedbackBtn"
        type="button"
        name="bad"
        onClick={onLeaveFeedback}
      >
        <img
          className="iconBtn iconBtn__bad"
          name="bad"
          src="https://cdn-icons-png.flaticon.com/512/927/927561.png"
          alt="emoji bad"
        />
      </button>
    </li>
  </ul>
  // </div>
);

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  onLeaveFeedback: propTypes.func.isRequired,
};
