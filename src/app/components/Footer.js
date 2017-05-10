import React from 'react';

export class Footer extends React.Component {
    constructor(props){
        super(props);
        this.state={
            list:props.list
        }
     
    }
       Click(){
            this.setState({
                list:this.state.list="New list"
            })
        }
    render() {
        return(
        <div className="site-footer">
            <ul>
                <li>Главная</li>
                <li>О нас</li>
                <li>Конакты</li>
            </ul>
            <p>{this.state.list}</p>
            <p>{this.props.name}</p>
            <button className="btn btn-primary" onClick={()=>this.Click(this)}>Click</button>
        </div>
        )
    }
}