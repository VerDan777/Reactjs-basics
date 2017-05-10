import React from "react";

export class Header extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            row:props.state
        }
    }
    Click(){
        this.setState({
            row:this.state.row="new row"
        });
    };
    render() {
        return(
        <div className="navbar navbar-default">
            <div className="container">
                <p>{this.state.row}</p>
                <button className="btn btn-primary" onClick={()=>this.Click(this)}>Click</button>
                <div className="navbar-header">
                    <ul className="nav navbar-nav">
                        <li>
                            <a href="#">Home</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        )
    }

} 