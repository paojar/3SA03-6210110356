import CharacterCard from './CharacterCard';
import WordCard from './WordCard';
import React from 'react';
import './App.css';
const word = "Hello";
function App() {
  return (
    <div>
    <WordCard value={word}/>
    </div>
    );
}
export default App