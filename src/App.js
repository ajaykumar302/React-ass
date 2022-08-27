import './App.css';
import React from 'react';
import Class from "./Components/class.jsx";
import Fun from "./Components/function.jsx";


class App extends React.Component {
  state={
    showClass : false,
    showFunction : false,
  }
  render(){
    return (
      <>
      <header className = "App">
      <h1 className="header">Styling using Functional and Class Component</h1>
        <div className= 'box'>
        <button onClick={() =>this.setState({showFunction : !this.state.showFunction})}>To see styling in Function Component</button>
        <button onClick={() =>this.setState({showClass : !this.state.showClass})}>To see styling in class Component</button>
        </div>
        <div className= 'con'>
        {this.state.showFunction && <Fun/>}
        {this.state.showClass && <Class/>}
        </div>
        
      </header>
        
      </>
    )
  }
}
export default App;
