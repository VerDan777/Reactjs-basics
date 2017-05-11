import React from 'react';

export class Footer extends React.Component {
    constructor(props){
        super(props);
        this.state={
            list:props.list,
            homeLink:props.homelink,
            calc:props.calc
        }
     
    }
    OnChange(event) {
        this.setState({
            homeLink:event.target.value
        })
    }
    OnChangeLink() {
        this.props.changeLink(this.state.homeLink)
    }
    Greeting() {
        this.setState({
            calc:this.state.calc+=1
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
            <input type="text" className="" />
            <button className="btn btn-primary" onClick={(event)=>this.OnChange(event)}>ChangeLink</button>
            <button className="btn btn-primary" onClick={() =>this.Greeting(this)} >Greeet!!!!</button>
            <p>{this.state.calc}</p>
        </div>
        )
    }
}