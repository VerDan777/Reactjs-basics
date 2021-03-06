import React from "react";
import {render} from "react-dom";
import {Header} from './components/Header';
import { Home } from "./components/Home"; 
import {Footer} from "./components/Footer";
 class App extends React.Component{
     OnGreet() {
         alert('helo');
     }
     render() {
        var user={
             name:"Daniil",
             hobbies:["sport","programming"]
         };
         return (
         <div className="container">
             <div className="row">
                 <div className="col-xs-10 col-xs-offset-1">
             <Header row="name"/> 
                </div>
             </div>
              <div className="row">
                 <div className="col-xs-10 col-xs-offset-1">
                  <Home name={"Daniil"} age={18} status={0} greet={this.OnGreet}/>
                </div>
             </div>
             <div className="row">
                 <div className="col-xs-10 col-xs-offset-1" >
                     <Footer list="this list" name="Daniil" homelink="Change" calc={1}/>
                </div>
                </div>
             </div>
        
         )
     }
 }
render(<App/>,document.getElementById("app"));