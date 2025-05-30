import React from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({ questions, onDeleteQuestion, onUpdateQuestion }) {
  if (!questions) {
    return <p>Loading questions...</p>; // Or some other loading state
  }

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
        {questions.map((question) => (
          <QuestionItem
            key={question.id}
            question={question}
            onDeleteQuestion={onDeleteQuestion}
            onUpdateQuestion={onUpdateQuestion}
          />
        ))}
      </ul>
    </section>
  );
}

export default QuestionList;