import React, { useEffect, useState } from 'react';
import DisplayWordComponent from './displayWord-component';
import { Link } from 'react-router-dom';

const Kitchen = () => {
  // State to store the fetched words
  const [words, setWords] = useState([]);

  // useEffect to fetch kitchen units when the component mounts
  useEffect(() => {
    const fetchKitchenUnits = async () => {
      try {
        // Fetch kitchen units from the server
        const response = await fetch('/units/kitchen');
        const data = await response.json();
        
        // Set the fetched words to the state
        setWords(data);
        console.log(data); // Log the fetched data to the console
      } catch (error) {
        console.error('Error fetching kitchen units:', error);
      }
    };

    fetchKitchenUnits(); // Call the fetchKitchenUnits function when the component mounts
  }, []); // Empty dependency array ensures the effect runs only once when the component mounts

  // Render the DisplayWordComponent and pass the fetched words as a prop
  return (
    <div className="App">
      <DisplayWordComponent words={words} />
      <Link to="/quiz/vocabulary">
        <div className="quiz-box">Click here to attend the quiz</div>
        </Link>
    </div>
  );
};

export default Kitchen;

