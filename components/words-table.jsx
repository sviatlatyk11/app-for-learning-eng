import React, { useEffect, useState } from "react";

const WordTable = () => {
  // create an empty array 'words' where the words would be added later 
  const [words, setWords] = useState([]);

  useEffect(() => {
    // check if the words are added, else show an error
    const fetchData = async () => {
      try {
        const response = await fetch('/words');
        const data = await response.json();
        setWords(data); // Assuming the data is an array of words
        // if array is empty -> print an error
      } catch (error) {
        console.error("Error", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <table class="table">
      {/* create a table with those headings: Word, Part of speech, Translation, Definition, Examples */}
        <thead>
          <tr>
            <th scope="col">Word</th>
            <th scope="col">Part of speech</th>
            <th scope="col">Translation</th>
            <th scope="col">Definition</th>
            <th scope="col">Examples</th>
          </tr>
        </thead>
        <tbody>
      {/* render the data list*/}
          {words.map((word, index) => (
          /*so if the list contain 20 words (each word is in a dictionary format) -> it goes through each word and finds the information with the keys: word, pos, ... */
            <tr key={index}>
              <td>{word.word}</td>
              <td>{word.pos}</td>
              <td>{word.meanings[0].translation}</td>
              <td>{word.meanings[0].definition}</td>
              <td>{word.meanings[0].examples.map((example, exIndex) => (<li key={exIndex}>{example}</li>))}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default WordTable;
