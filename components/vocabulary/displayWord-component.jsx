import React, { useState } from 'react';
import { GrFormNextLink, GrFormPreviousLink } from 'react-icons/gr';

// Functional component for displaying and navigating through a list of words
const DisplayWordComponent = ({ words }) => {
  // State variables for managing the component's state
  const [currentIndex, setCurrentIndex] = useState(0);
  const [completed, setCompleted] = useState(false);
  const [showTranslation, setShowTranslation] = useState(false);

  // Check if the current word is the last word in the list
  const isLastWord = currentIndex === words.length - 1;

  // Toggle between displaying the word and its translation
  const toggleTranslation = () => {
    setShowTranslation(!showTranslation);
  };

  // Render the current word and its properties
  const displayWord = () => {
    const currentWord = words[currentIndex];

    // Check if currentWord is defined before accessing its properties
    if (currentWord) {
      // Apply styles based on whether the translation is shown
      const containerClasses = `word-container ${showTranslation ? 'clicked' : ''}`;
      return (
        <div className={containerClasses} onClick={toggleTranslation}>
          <h1 className='word'>
            {showTranslation ? currentWord.translation : currentWord.word}
          </h1>
          {showTranslation && currentWord.img && (
            <div>
              {typeof currentWord.img === 'string' ? (
                <img src={currentWord.img} className='word-image' alt='word' />
              ) : (
                <img
                  src={`data:image/png;base64,${currentWord.img.$binary.base64}`}
                  className='word-image'
                  alt='word'
                />
              )}
            </div>
          )}
        </div>
      );
    }

    // Handle the case when currentWord is undefined
    return <p>No words available</p>;
  };

  // Move to the next word or complete the component if it's the last word
  const nextWord = () => {
    if (isLastWord) {
      setCompleted(true);
    } else {
      setCurrentIndex((prevIndex) => prevIndex + 1);
      setShowTranslation(false); // Reset the translation display when moving to the next word
    }
  };

  // Move to the previous word, ensuring we don't go below the first word
  const prevWord = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prevIndex));
    setShowTranslation(false); // Reset the translation display when moving to the previous word
  };

  // Render the component's UI
  return (
    <div className='display-word'>
      {completed ? (
        // Display a completion message if all words have been completed
        <p className='completion-message'>Well done! You've completed all the words.</p>
      ) : (
        // Display the current word and navigation buttons
        <div>
          {displayWord()}
          <div className='button-container'>
            {/* Button to move to the previous word */}
            <button className='prev-button' onClick={prevWord}>
              <GrFormPreviousLink className='prev-icon' />
            </button>
            {/* Button to move to the next word or finish if it's the last word */}
            <button className='next-button' onClick={nextWord}>
              {isLastWord ? 'Finish' : <GrFormNextLink className='next-icon' />}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DisplayWordComponent;

