import React, { Component } from 'react';
import './App.css';
import Main from './components/Main'
import data from './data/resumeData.json'

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      resumeData : {}
    };
  }

  getResumeData = () => {
    this.setState({resumeData:data})
  }

  componentDidMount(){
    this.getResumeData();
  }

  render (){
    return (
      <div className="App">
        <Main data = {this.state.resumeData.main}/>
      </div>
    );
  }
}

export default App;
