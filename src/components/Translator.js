import React, { Component } from "react";

class Translator extends Component { 

  constructor(props) {
    super(props);
    this.state = {wordInput: "query", word_data:[], targetLang: "German", requestCompleted: false};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this); 
    this.handleLanguageChange = this.handleLanguageChange.bind(this);
  }

  changeToRandomWord(){
    var randomWords = require('random-words');
    this.setState({wordInput:randomWords()})
  }
  componentDidMount(){
    this.changeToRandomWord()
  }
  handleSubmit(event){
    //TO-DO :  CHANGE REDUX STATE
    event.preventDefault(); // This prevents the form from refreshing the page
    console.log('Handle submit event triggered.')
    console.log("IN HANDLE SUBMIT EVENT :")
    console.log(this.state)
    console.log("Fetching...")
    const url = "http://localhost:5000/translate?word="+this.state.wordInput+"&lang="+this.state.targetLang
    fetch(url)
    .then((res) => {return res.json()}).then(((data) => this.setState({word_data: data, requestCompleted:true})))
    console.log(this.state)
    console.log( "URL : "+url)
    
  }
  handleChange(event){
    console.log('Handle submit event triggered.')
    this.setState({wordInput: event.target.value})
    console.log(this.state.wordInput)
    
  }
  handleLanguageChange(event){
    this.setState({targetLang: event.target.value})
    console.log(this.state.targetLang)

  }
  wordInput(){
    return (<div>
      <span>Enter the word to translate here : </span>
      <form onSubmit={this.handleSubmit}>
      <input type="text" value={this.state.wordInput} onChange={this.handleChange} />
      <select name="Languages" onChange={this.handleLanguageChange}>
        <option value="German">German</option>
        <option value="French">French</option>
        <option value="Dutch">Dutch</option>
        <option value="Italian">Italian</option>
        <option value="Swedish">Swedish</option>

      </select>
      
      <input type="submit" value="Submit"/>
      </form>
      </div>)
    }
    credits(){
      return(
      <div >
        <p>--------------------</p>
        <em>Data from Wiktionary.org</em><br></br>
        <img alt='logo' width="100" height="100" src='https://upload.wikimedia.org/wikipedia/meta/6/61/Wiktionary_propsed-smurrayinchester.png'/>
      </div>
      )
    }
    render() {
      if (this.state.requestCompleted === true ){
        
        console.log(this.state.wordInput)
        const keys = Object.keys(this.state.word_data)

        if ( keys === undefined || keys.length === 0) {
          console.log("no result found.")
          return (
            <div>
            {this.wordInput()}
             <p>No translation found.</p>
             </div>)
        }
        else{
        }
        console.log(keys)
        keys.forEach(key => { console.log(this.state.word_data[key][0].translation)       
        });
        const listKeys = keys.map((key, index) => 
        <p key={index}>{key} : <i>{this.state.word_data[key][0].translation}</i> ({this.state.word_data[key][0].gender})</p>)
        return ( 
          <div>{this.wordInput()}{listKeys}{this.credits()}</div>)
        }
        else return (
          this.wordInput()
          
          );
        }
        
      }
      
      export default Translator;
      ;