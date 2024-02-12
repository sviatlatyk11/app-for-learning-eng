import React, { useState } from 'react';

function FetchDataComponent({ onDataFetch }) {
  const [data, setData] = useState([]);
  const [searchWord, setSearchWord] = useState('');
  const [errorMessage, setErrorMessage] = useState(null); // New state for error message

  const handleSearchInputChange = (event) => {
    setSearchWord(event.target.value);
    // Clear previous error message when the user starts typing again
    setErrorMessage(null);
  };

  const isValidInput = () => {
    const validInputRegex = /^[a-zA-Z\s]+$/;
    return validInputRegex.test(searchWord);
  };

  const fetchData = () => {
    if (!isValidInput()) {
      // Set the error message for invalid input
      setErrorMessage("Invalid input. Please enter a valid word.");
      return;
    }

    console.log("Word that you typed is:", searchWord);

    fetch(`/dictionary?word=${searchWord}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((responseData) => {
        setData(responseData);
        console.log("Fetched data:", responseData);

        onDataFetch(responseData);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  return (
    <div className="input-container">
      <input
        type="text"
        placeholder="Enter a word"
        value={searchWord}
        onChange={handleSearchInputChange}
        className="input-tag"
      />
      
  

      <button type="button" className="btn btn-default btn-sm" onClick={fetchData}>
        <span className="glyphicon glyphicon-search"></span> Search
      </button>

      {/* Display error message if there is one */}
{errorMessage && <div className="error-message" style={{ color: 'white' }}>{errorMessage}</div>}

    </div>
  );
}

export default FetchDataComponent;
