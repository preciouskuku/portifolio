import React, { useState, useEffect } from 'react';

export default function TypingEffect({ text }) {
  const [displayed, setDisplayed] = useState('');
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayed((prev) => prev + text.charAt(index));
      index++;
      if (index === text.length) clearInterval(interval);
    }, 100);
    return () => clearInterval(interval);
  }, [text]);
  
  return <h1 className="typing">{displayed}<span className="blinking-cursor">|</span></h1>;
}
