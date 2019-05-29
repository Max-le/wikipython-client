import React, { Component } from "react";


class About extends Component {

    // TODO : CONSTRUCTOR HERE 
    constructor(props) {
        super(props);
        this.state = {showText: false}
        this.handleToggleButton = this.handleToggleButton.bind(this);

    
    }
    //TODO : TOGGLE BUTTON TO HIDE AND SHOW ABOUT'S TEXT 
    toggleButton(){
        if (this.state.showText === true ) return (<div></div>)
        else
        return(<div><button  onClick={this.handleToggleButton}>About this app</button></div>)
    }
    handleToggleButton(e){
        e.preventDefault();
        if (this.state.showText === false) {this.setState({showText:true})}
        else {this.setState({showText:false})}
    }
    text(){
        if (this.state.showText === false) return (<div></div>)
        return(
            <div>
            <p style={{fontStyle:"italic", fontSize:14}}>This is an app to translate words from English to several languages.<br></br> 
            This is basically a better interface
             to access Wiktionary's translations for a word 
             in a specific language.<br></br> The exact same informations can be found 
             on <a href="http://wiktionary.org">Wiktionary.org</a>, this app is just a more convenient way to harvest 
             and present the data. 
             </p>
             <p style={{fontStyle:"italic", color:"grey", fontSize:12}}>Created by Max Lepin</p>
             </div>
        )
    }


    render() {
        console.log(this.state)
        return (<div>{this.text()}{this.toggleButton()}</div>)
}
}
export default About;

