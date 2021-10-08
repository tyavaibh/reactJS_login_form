import {Component} from "react";
import "../Styles/Record.css";

class Record extends Component{

    render(){

        return(

            <div className={"recordDiv"}>
                <table>
                    <tbody>
                    <tr>
                        <th>Name</th>
                        <th>Mobile</th>
                        <th>Email</th>
                    </tr>
                    <tr>
                        <td>{this.props.name}</td>
                        <td>{this.props.mobile}</td>
                        <td>{this.props.email}</td>
                    </tr>
                    </tbody>
                </table>

            </div>
        )
    }
}

export default Record;