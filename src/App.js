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
 
        <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
        crossorigin="anonymous"
          /> 
          </div>
  );
}
export default App;
