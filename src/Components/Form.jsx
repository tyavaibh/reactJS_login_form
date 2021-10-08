import {Component} from "react";
import "../Styles/Form.css"
import Record from "./Record.jsx";



class Form extends Component{

    state={name:"",
       mobile:"",
       email:"", 
        display:"one"}

    handleChange=(e)=>{
        let x=e.target.id
        
        if(x==="name"){
            this.setState({name:e.target.value})
        }
        else if(x==="mobile"){
            this.setState({mobile:e.target.value})
        }else{
            this.setState({email:e.target.value})
        }

    }

    render(){

        if(this.state.display==="one"){
            
            return(
                <div className={"formDiv"}>
                    <div className={"inDiv"}>
                    <label>Name:</label> 
                    <input className={"name_inp"} type="text" id="name" onClick={this.handleName} value={this.state.name} 
                     onChange={this.handleChange}/>
                    <br /><br />
    
                    <label>Mobile:</label> 
                    <input className={"mob_inp"} type="text" id="mobile" onClick={this.handleMobile} value={this.state.mobile}
                     onChange={this.handleChange} />
                    <br /><br />
    
                    <label>Email Address:</label> 
                    <input className={"mail_inp"} type="text" id="email" onClick={this.handleEmail} value={this.state.email}
                      onChange={this.handleChange}  />
                    <br /><br />
    
                    <button onClick={()=>{
                        if(this.state.name!=="" && this.state.name!=="" && this.state.name!=="")
                        {this.setState({display:"two"})}
                        }} 
                        className={"sub_btn"}>Submit</button>

                    <button onClick={
                        ()=>{
                            this.setState({name:""});
                            this.setState({mobile:""});
                            this.setState({email:""})
                            this.setState({display:"one"})
                        }
                    } className={"res_btn"}>Reset</button>
                    </div>
                </div>)

        }else{
            return (
            <>
                <div className={"formDiv"}>
                    <div className={"inDiv"}>
                    <label>Name:</label> 
                    <input className={"name_inp"} type="text" id="name" onClick={this.handleName} value={this.state.name} 
                     onChange={this.handleChange}/>
                    <br /><br />
    
                    <label>Mobile:</label> 
                    <input className={"mob_inp"} type="text" id="mobile" onClick={this.handleMobile} value={this.state.mobile}
                     onChange={this.handleChange} />
                    <br /><br />
    
                    <label>Email Address:</label> 
                    <input className={"mail_inp"} type="text" id="email" onClick={this.handleEmail} value={this.state.email}
                      onChange={this.handleChange}  />
                    <br /><br />
    
                    <button onClick={()=>{this.setState({display:"two"})}} className={"sub_btn"}>Submit</button>
                    <button onClick={
                        ()=>{
                            this.setState({name:""});
                            this.setState({mobile:""});
                            this.setState({email:""})
                            this.setState({display:"one"})
                        }
                    } className={"res_btn"}>Reset</button>
                    </div>
                </div>

                <Record  name={this.state.name} mobile={this.state.mobile} email={this.state.email}/>
            </>
            )
        }
        
    }
}

export default Form;