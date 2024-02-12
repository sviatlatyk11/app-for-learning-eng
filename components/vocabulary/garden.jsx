import React, { useEffect, useState } from 'react';
import DisplayWordComponent from './displayWord-component';

const Garden = () => {
  const [words, setWords] = useState([]);

  useEffect(() => {
    const fetchGardenUnits = async () => {
      try {
        const response = await fetch('/units/garden');
        const data = await response.json();
        setWords(data);
        console.log(data)
      } catch (error) {
        console.error('Error fetching kitchen units:', error);
      }
    };

    fetchGardenUnits(); // Corrected function call
  }, []); // Empty dependency array ensures the effect runs only once when the component mounts
 
  return (
    <div className="App">
      <DisplayWordComponent words={words} /> {/* Corrected variable name */}
    </div>
  );
};

export default Garden;

