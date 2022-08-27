import React from 'react';
import './component.css';


function Fun (){
    return (
        <>
        <div className = 'fun'>
        <h1>This is created using Functional Component</h1>
        <p>This is done Using external CSS</p>
        <p style={{color: 'blue'}}>This is done Using internal CSS</p>
        </div>
            
        </>
    )
}
export default Fun;