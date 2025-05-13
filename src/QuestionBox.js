import React from 'react';
import './QuestionBox.css';

function QuestionBox() {
  return (
    <div className="question-box">
      <input type="text" placeholder="What do you want to ask or share?" />
      <button>Ask</button>
    </div>
  );
}

export default QuestionBox;
