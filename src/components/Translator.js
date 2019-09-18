import React, { Component } from "react";
import {Button, Form, Dropdown} from 'react-bootstrap';
import ReactLoading from 'react-loading';

class Translator extends Component { 

  constructor(props) {
    super(props);
    this.state = {wordInput: "query", word_data:[], targetLang: "German", requestCompleted: false, requestLoading: false};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this); 
    this.handleLanguageChange = this.handleLanguageChange.bind(this);
    this.changeToRandomWord = this.changeToRandomWord.bind(this)
  }

  changeToRandomWord(){
    var randomWords = require('random-words');
    this.setState({wordInput:randomWords()})
  }
  componentDidMount(){
    this.changeToRandomWord()
    fetch("https://cryptic-gorge-83791.herokuapp.com/translate?word=wake&lang=French").then((res) => {console.log("Wake up request OK")})
    
  }
  
  handleSubmit(event){

    event.preventDefault(); // This prevents the form from refreshing the page
    console.log('Handle submit event triggered.')
    console.log("IN HANDLE SUBMIT EVENT :")
    this.setState({requestLoading:true, requestCompleted:false})
    console.log(this.state)
    console.log("Fetching...")
    const url = "https://cryptic-gorge-83791.herokuapp.com/translate?word="+this.state.wordInput+"&lang="+this.state.targetLang
    fetch(url)
    .then((res) => {return res.json()}).then(((data) => this.setState({word_data: data, requestCompleted:true, requestLoading:false})))
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

  loading(){
    return(<div>
            <div style={{  width:70, margin:'auto', padding:5}}>  
            <ReactLoading type={'spin'} color={'blue'} height={"100%"} width={"100%"} /> 
            </div>
            <span>( the first query may take more time ) </span>
      </div>)

  }

  wordInput(){
    return (<div>
      <span>Enter an english word to translate here : </span>
      <Form onSubmit={this.handleSubmit}>
      <input type="text" value={this.state.wordInput} onChange={this.handleChange} />
      <select name="Languages" value={this.state.targetLang} onChange={this.handleLanguageChange} 
      style={{backgroundColor:"White",borderColor:"Grey", margin:"0px 3px", fontSize:13, borderColor:"LightBlue"}}>

        <option value="German">German</option>
        <option value="French">French</option>
        <option value="Dutch">Dutch</option>
        <option value="Russian">Russian</option>
        <option value="Japanese">Japanese</option>
        <option value="Italian">Italian</option>
        <option value="Spanish">Spanish</option>
        <option value="Portuguese">Portuguese</option>
        <option value="Swedish">Swedish</option>
        <option value="Finnish">Finnish</option>
        <option value="Norwegian">Norwegian</option>
        <option value="Hindi"> Hindi</option>


      </select>
      <Button variant="outline-primary" type="submit" value="Submit">Translate ! </Button>
      </Form>
      <Button onClick={this.changeToRandomWord} style={{margin:5}} variant="outline-primary">Random word</Button>

      </div>
      
      )
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
      var divStyle = {
        color: "grey", 
        fontSize:20, 
        // borderStyle: "dotted",

 
      }
      if (this.state.requestCompleted === true ){
        
        console.log(this.state.wordInput)
        const keys = Object.keys(this.state.word_data)

        if ( keys === undefined || keys.length === 0) {
          console.log("no result found.")
          return (
            <div style={divStyle}>
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
          <div style={divStyle}>
          {this.wordInput()}{listKeys}{this.credits()}
          </div>
          )
        }
        else if (this.state.requestLoading === true) {
          return (this.loading())
        }
        else return (
          <div style={divStyle}>{this.wordInput()}</div>
          );
        }
        
      }
      
      export default Translator;
      ;