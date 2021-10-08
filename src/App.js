import {Component} from "react";
import Form from "./Components/Form.jsx";
import "./Styles/Form.css"

class App extends Component{


  render(){

    return(
      <>
        <div className={"headerDiv"}>
          <h1>Data Input Form</h1>
        </div>
        <Form/>
      </>
    )
  }
}

export default App;