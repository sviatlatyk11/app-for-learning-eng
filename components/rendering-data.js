import React from 'react';
import Word from './word-components/word-componet';
import Pos from './word-components/pos-component';
import Definition from './word-components/definition-component';
import Translation from './word-components/translation-component';
import Examples from './word-components/examples-componet';

// It receives an 'item' prop that contains information about a word
function ItemComponent({ item }) {
  // Define a function 'renderMeaning' to render the meaning of the word.
  // It takes 'meaning' and 'meaningIndex' as parameters.
  const renderMeaning = (meaning, meaningIndex) => (
    <div key={meaningIndex}>
    {/* Render the definition of the word using the 'Definition' component. */}
      <Definition word={meaning.definition} />
      {/* Render the translation of the word using the 'Translation' component. */}
      <Translation word={meaning.translation} />
      {/* Render examples of the word. */}
      <Examples word={meaning.examples.map((example, exampleIndex) => (<span key={exampleIndex}>{example} &nbsp; </span>))} />
    </div>
  );

  return (
    // The main component rendering logic.
    <div>
    {/* Render the word using the 'Word' component. */}
      <Word word={item.word} />
      {/* Render the word's pos using the 'Pos' component. */}
      <Pos word={item.pos} />

      {/* Iterate through the list of meanings for the word. */}
      {item.meanings.map((meaning, index) => (
        <div key={index}>
        {/* Call the 'renderMeaning' function to display each meaning. */}
          {renderMeaning(meaning, index)}
        </div>
      ))}
    </div>
  );
}
export default ItemComponent;

