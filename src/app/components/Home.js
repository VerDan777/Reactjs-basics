import React from "react";

export class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state= { 
            age:props.age,
            status:0
        }
        setTimeout(()=>{this.setState({status:this.state.status=this.state.status+1})},1000);
    }

    OnMakeChanged() {
        this.setState({
            age:this.state.age-=3,
            status:this.state.status+=5
        })
        if(this.state.age<0){
            console.log("opps");
        }
      
    }
    render() {
        var text= "text";
        return (
            <div>
                <p>In a new Component!</p>
                <p>{text}</p>
                <p>My name {this.props.name},my age is {this.state.age},status is {this.state.status}</p>
                <button className="btn btn-primary" onClick={() => this.OnMakeChanged()}>Click</button>
                <p>{this.state.welocme}</p>
            </div>
           
        );
    }
  
};
 