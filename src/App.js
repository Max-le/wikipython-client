import React from 'react';
import './App.css';
import Translator from './components/Translator'
import About from './components/About'
import Buffer from './components/Buffer'
function App() {


    return (
    <div className="App" >
      <Buffer/>
      <Translator/>
      <About/>

    </div>
  );
}
export default App;
