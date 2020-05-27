import React, { Component } from 'react';
import Validation from './Validation/Validation'
import Char from './Char/Char'
import './App.css';

class App extends Component {
  state = {
    textInput: ""
  }

  changeInputHandler = (letter) => {
    this.setState({textInput: letter.target.value})
  }

  deleteChar = (index) => {
    let textUpdate = this.state.textInput.split('')
    textUpdate.splice(index, 1)
    textUpdate = textUpdate.join("")
    this.setState({textInput: textUpdate})
  }

  render() {

    const charList = this.state.textInput.split("").map((ch, index )=> {
      return <Char innerLetter={ch} key={index} click={() => this.deleteChar(index)}/>
    })

    return (
      <div className="App">
        <ol>
          <li>When you click a CharComponent, it should be removed from the entered text.</li>
        </ol>
        <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>
        <br />
        <input type="text" 
        onChange={(letter) => this.changeInputHandler(letter)}
        value={this.state.textInput} />
        <p>{this.state.textInput}</p>
        <Validation textInputLength={this.state.textInput.length}/>
        {charList}
      </div>
    );
  }
}

export default App;
