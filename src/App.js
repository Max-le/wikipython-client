import React from 'react';
import './App.css';
import Translator from './components/Translator'
import About from './components/About'
import Buffer from './components/Buffer'
import Title from './components/Title'
function App() {


    return (
    <div className="App" >
      <Buffer/>
      <Title/>
      <Translator/>
      <About/>
 
        <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
        crossorigin="anonymous"
          /> 
        {/* Google Fonts Import */}
        <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300&display=swap" rel="stylesheet"></link>

          </div>
  );
}
export default App;
