import React from "react";

export class Home extends React.Component {
    constructor(props) {
        super();
        this.age=props.age;
    }
    OnMakeChanged() {
        this.age+=3;
        console.log(this.age);
    }
    render() {
        var text= "text";
        return (
            <div>
                <p>In a new Component!</p>
                <p>{text}</p>
                {/*<p>My name {this.props.name},my age is {this.props.age}</p>*/}
                <p>My name {this.props.name},my age is {this.age}</p>
                <button className="btn btn-primary" onClick={() => this.OnMakeChanged()}>Click</button>
            </div>
           
        );
    }
  
};
 