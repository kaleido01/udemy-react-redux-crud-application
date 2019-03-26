import React, { Component } from 'react';

//JSX version

class App extends Component {
  render() 
  {
    const greeting ="Hi TOM!";
    const dom=<h1 className="foo">{greeting}</h1>;


    return (
    <React.Fragment>
        <input type="text" onChange={()=>{console.log("I am clicked")}}/>
     

    </React.Fragment>
    
    
     
    )
  }
}

 export default App;
