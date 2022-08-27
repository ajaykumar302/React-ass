import React from 'react';
import './component.css';

class Class extends React.Component {
    render(){
      return (
        <>
           <div className = 'class'>
        <h1>This is created using Class Component</h1>
        <p>This is done Using external CSS</p>
        <p style={{color: 'blue'}}>This is done Using internal CSS</p>
        </div>
        </>
      )
    }
  }
  export default Class;