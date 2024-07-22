import React from 'react';
import './styles.css';

const Chips = ({ value, handleChange, handleKeyDown, chipsData, handleRemove }) => {
  return (
    <div className="chips-container">
      {chipsData.map((chip, index) => (
        <div key={index} className="chip">
          {chip}
          <span className="remove-chip" onClick={() => handleRemove(chip)}>❌</span>
        </div>
      ))}
      <input
        value={value}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        placeholder="Enter email..."
        autoFocus
        className="chips-input"
      />
    </div>
  );
};

export default Chips;
