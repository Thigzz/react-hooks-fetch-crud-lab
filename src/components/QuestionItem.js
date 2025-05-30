import React from "react";

function QuestionItem({ question, onDeleteQuestion, onUpdateQuestion }) {
  const { id, prompt, answers, correctIndex } = question;

  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));

  function handleDeleteClick() {
    onDeleteQuestion(id);
  }

  function handleCorrectAnswerChange(event) {
    onUpdateQuestion(id, event.target.value);
  }

  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label htmlFor={`correct-answer-${id}`}>Correct Answer:</label>
      <select
        id={`correct-answer-${id}`}
        defaultValue={correctIndex}
        onChange={handleCorrectAnswerChange}
      >
        {options}
      </select>
      <button onClick={handleDeleteClick}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;