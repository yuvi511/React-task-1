import React, { useState } from 'react';
import './ParagraphWordCounter.css'; // Import your CSS for styling

function WordCounter() {
  const [text, setText] = useState('');
  const words = text.split(/\s+/).filter(Boolean);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div className="word-counter-container">
      <h1 className="header">Responsive Paragraph Word Counter</h1>
      <div className="textarea-container">
        <textarea
          className="text-input"
          rows="10"
          placeholder="Type or paste your text here..."
          value={text}
          onChange={handleChange}
        ></textarea>
        <p className="word-count">
          {words.length} {words.length === 1 ? 'Word' : 'Words'}
        </p>
      </div>
    </div>
  );
}

export default WordCounter;

