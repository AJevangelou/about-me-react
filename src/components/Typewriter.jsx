import React, { useState, useEffect } from 'react';

const Typewriter = () => {
  const words = ["Machine Learning & AI",
  "Frontend Development",
  "iOS & Android Apps"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentWord, setCurrentWord] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const type = () => {
      const word = words[currentWordIndex];
      setCurrentWord(word.substring(0, currentIndex));

      if (!isDeleting && currentIndex === word.length) {
        setIsDeleting(true);
      } else if (isDeleting && currentIndex === 0) {
        setIsDeleting(false);
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
      }

      setCurrentIndex((prevIndex) =>
        isDeleting ? prevIndex - 1 : prevIndex + 1
      );
    };

    const timeout = setTimeout(type, isDeleting ? 150 : 200);

    return () => clearTimeout(timeout);
  }, [currentWord, currentWordIndex, currentIndex, isDeleting]);

  useEffect(() => {
    // Start deleting after a pause when word is fully typed
    if (currentIndex === words[currentWordIndex].length && !isDeleting) {
      setTimeout(() => setIsDeleting(true), 1000);
    }
  }, [currentWordIndex, currentIndex, isDeleting]);

  return (
    <span className="font-bold">{currentWord}</span>
  );
};

export default Typewriter;
