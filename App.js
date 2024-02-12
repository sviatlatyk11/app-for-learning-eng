import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FetchDataComponent from "./components/word-search";
import ItemComponent from "./components/rendering-data";
import WordTable from "./components/words-table";
import Narbar from "./components/navbar-component";
import ReadingMain from "./components/reading/reading-main";
import FirstStoryPage from "./components/reading/first-story-page";
import SecondStoryPage from "./components/reading/second-story-page";
import ThirdStoryPage from "./components/reading/third-story-page";
import Quiz from "./quiz";
import VocabularyMain from "./components/vocabulary/vocabulary-main";
import Kitchen from "./components/vocabulary/kitchen";
import Garden from "./components/vocabulary/garden";
import QuizVocabulary from "./components/vocabulary/vocabulary-quiz";
import MainPage from "./components/main-page";


function App() {
  const [data, setData] = useState([]); // Use state to store the fetched data

  // Define a function to set the fetched data as a prop
  const handleDataFetched = (fetchedData) => {
    setData(fetchedData);
  };

  return (
    <BrowserRouter>
    <Narbar />
      <Routes>
        <Route path="/dictionary" element={
          <React.Fragment>
            <div className="App">
              <header className="App-header">
                <FetchDataComponent onDataFetch={handleDataFetched} />
                {data.length > 0 && (
                  <div className="results-container">
                    {data.map((item, index) => (<div key={index}><ItemComponent item={item} /></div>))}
                  </div>
                )}
              </header>
            </div>
            <WordTable />
          </React.Fragment>
        } />
        
        <Route path="reading" element={
        <React.Fragment>
          <ReadingMain />
          </React.Fragment>
        } />


        <Route path="reading/first-story" element={
        <React.Fragment>
        <FirstStoryPage />
        </React.Fragment>
        } />

        <Route path="reading/second-story" element={
        <React.Fragment>
        <SecondStoryPage />
        </React.Fragment>
        } />
        
        <Route path="reading/third-story" element={
        <React.Fragment>
        <ThirdStoryPage />
        </React.Fragment>
        } />

        <Route path="quiz" element={
        <React.Fragment>
          <Quiz />
          </React.Fragment>
        } />

        <Route path="quiz/vocabulary" element={
        <React.Fragment>
          <QuizVocabulary />
          </React.Fragment>
        } />

        <Route path="vocabulary" element={
        <React.Fragment>
          <VocabularyMain />
          </React.Fragment>
        } />

      <Route path="/vocabulary/kitchen" element={
        <React.Fragment>
        <Kitchen />
        </React.Fragment>
        } />

      <Route path="/vocabulary/shop" element={
        <React.Fragment>
        
        </React.Fragment>
        } />

      <Route path="/vocabulary/school" element={
        <React.Fragment>
        
        </React.Fragment>
        } />

      <Route path="/vocabulary/garden" element={
        <React.Fragment>
        <Garden />
        </React.Fragment>
        } />

      <Route path="/main-page" element={
        <React.Fragment>
        <MainPage />
        </React.Fragment>
        } />



      </Routes>
    </BrowserRouter>
  );
}

export default App;
