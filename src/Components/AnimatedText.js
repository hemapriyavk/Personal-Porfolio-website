import React, { useState, useEffect } from 'react';

const AnimatedText = () => {
  const text = "Full Stack Web Developer";
  const typingSpeed = 100; // milliseconds per character
  const eraseSpeed = 50; // milliseconds per character during erasing
  const pauseTime = 1500; // milliseconds to pause between typing and erasing
  const pauseBetween = 1000; // milliseconds to pause between typing and erasing

  const [displayText, setDisplayText] = useState('');
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    let timer;

    if (isPaused) {
      timer = setTimeout(() => {
        setIsPaused(false);
        setIsDeleting(!isDeleting);
      }, pauseTime);
    } else if (!isDeleting && charIndex < text.length) {
      timer = setTimeout(() => {
        setDisplayText((prev) => prev + text[charIndex]);
        setCharIndex((prev) => prev + 1);
      }, typingSpeed);
    } else if (isDeleting && charIndex > 0) {
      timer = setTimeout(() => {
        setDisplayText((prev) => prev.substring(0, prev.length - 1));
        setCharIndex((prev) => prev - 1);
      }, eraseSpeed);
    } else {
      setIsPaused(true);
      timer = setTimeout(() => {
        setIsDeleting(!isDeleting);
      }, pauseBetween);
    }

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, isPaused]);

  return (
    <span className="about-me">
      {displayText}
    </span>
  );
};

export default AnimatedText;
