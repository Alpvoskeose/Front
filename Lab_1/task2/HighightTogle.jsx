import React, { useState } from 'react';
import './App.css';

function HighlightToggle() {
  const [isHighlighted, setIsHighlighted] = useState(false);

  const toggleHighlight = () => {
    setIsHighlighted(!isHighlighted);
  };

  return (
    <div>
      <p className={isHighlighted ? 'highlight' : ''}>
        Это текст внутри React компонента
      </p>
      <button onClick={toggleHighlight}>
        Toggle Highlight
      </button>
    </div>
  );
}

export default HighlightToggle;