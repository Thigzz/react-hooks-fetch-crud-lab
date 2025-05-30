import React, { useState } from "react";

function QuestionForm({ onAddQuestion }) { // Renamed props to onAddQuestion to match App.js
  const [formData, setFormData] = useState({
    prompt: "",
    answer1: "",
    answer2: "",
    answer3: "",
    answer4: "",
    correctIndex: "0", // Initialize as string to match select value
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    
    // Prepare the data for the API
    const newQuestion = {
      prompt: formData.prompt,
      answers: [
        formData.answer1,
        formData.answer2,
        formData.answer3,
        formData.answer4,
      ].filter(answer => answer !== ""), // Filter out empty answers if desired, or ensure 4 are always sent
      correctIndex: parseInt(formData.correctIndex, 10),
    };

    // Basic validation: ensure there's a prompt
    if (!newQuestion.prompt.trim()) {
        alert("Please enter a prompt for the question.");
        return;
    }
    // Basic validation: ensure there are at least two answers, for example.
    // Adjust as per your application's requirements.
    if (newQuestion.answers.filter(ans => ans.trim() !== "").length < 2) {
        alert("Please provide at least two answers.");
        return;
    }


    onAddQuestion(newQuestion); // Call the function passed from App.js

    // Reset form (optional)
    setFormData({
      prompt: "",
      answer1: "",
      answer2: "",
      answer3: "",
      answer4: "",
      correctIndex: "0",
    });
  }

  return (
    <section>
      <h1>New Question</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Prompt:
          <input
            type="text"
            name="prompt"
            value={formData.prompt}
            onChange={handleChange}
            required // Added required
          />
        </label>
        <label>
          Answer 1:
          <input
            type="text"
            name="answer1"
            value={formData.answer1}
            onChange={handleChange}
            required // Added required
          />
        </label>
        <label>
          Answer 2:
          <input
            type="text"
            name="answer2"
            value={formData.answer2}
            onChange={handleChange}
            required // Added required
          />
        </label>
        <label>
          Answer 3:
          <input
            type="text"
            name="answer3"
            value={formData.answer3}
            onChange={handleChange}
          />
        </label>
        <label>
          Answer 4:
          <input
            type="text"
            name="answer4"
            value={formData.answer4}
            onChange={handleChange}
          />
        </label>
        <label>
          Correct Answer:
          <select
            name="correctIndex"
            value={formData.correctIndex}
            onChange={handleChange}
          >
            {/* Dynamically generate options if answers can be empty, or ensure they are not */}
            {formData.answer1 && <option value="0">{formData.answer1}</option>}
            {formData.answer2 && <option value="1">{formData.answer2}</option>}
            {formData.answer3 && <option value="2">{formData.answer3}</option>}
            {formData.answer4 && <option value="3">{formData.answer4}</option>}
          </select>
        </label>
        <button type="submit">Add Question</button>
      </form>
    </section>
  );
}

export default QuestionForm;