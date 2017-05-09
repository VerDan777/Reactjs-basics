import React from "react";

export class Home extends React.Component {
    render() {
        var text= "text";
        return (
            <div>
                <p>In a new Component!</p>
                <p>{text}</p>
                <p>My name {this.props.name},my age is {this.props.age}</p>
            </div>
           
        );
    }
  
};
 