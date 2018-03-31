import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class C extends Component {

    state={
      f1:'不喜欢萝卜',
      f2:'不喜欢白菜',
      f3:'不喜欢番茄'
    }
   
   
    Fischange1=()=>{
    if(this.state.f1==='最喜欢萝卜'){}
    else{
      if (this.state.f1==='喜欢萝卜')
        this.setState((prevState,props)=>({f1:'不喜欢萝卜'}))
      else
        this.setState((prevState,props)=>({f1:'喜欢萝卜'}))
    }
    }
    Secchange1=()=>{
        if(this.state.f2==='最喜欢白菜'||this.state.f3==='最喜欢番茄'){}
        else{
          if (this.state.f1==='喜欢萝卜')
            this.setState((prevState,props)=>({f1:'最喜欢萝卜'}))
          else
            this.setState((prevState,props)=>({f1:'喜欢萝卜'}))
        }
        }

    Fischange2=()=>{
    if(this.state.f2==='最喜欢白菜'){}
    else{
      if (this.state.f2==='喜欢白菜')
        this.setState((prevState,props)=>({f2:'不喜欢白菜'}))
      else
        this.setState((prevState,props)=>({f2:'喜欢白菜'}))
    }
    }
    Secchange2=()=>{
        if(this.state.f1==='最喜欢萝卜'||this.state.f3==='最喜欢番茄'){}
        else{
          if (this.state.f2==='喜欢白菜')
            this.setState((prevState,props)=>({f2:'最喜欢白菜'}))
          else
            this.setState((prevState,props)=>({f2:'喜欢白菜'}))
        }
        }
    
        Fischange3=()=>{
            if(this.state.f3==='最喜欢番茄'){}
            else{
              if (this.state.f3==='喜欢番茄')
                this.setState((prevState,props)=>({f3:'不喜欢番茄'}))
              else
                this.setState((prevState,props)=>({f3:'喜欢番茄'}))
            }
            }
         Secchange3=()=>{
            if(this.state.f1==='最喜欢萝卜'||this.state.f2==='最喜欢白菜'){}
             else{
                if (this.state.f3==='喜欢番茄')
                    this.setState((prevState,props)=>({f3:'最喜欢番茄'}))
                else
                    this.setState((prevState,props)=>({f2:'喜欢番茄'}))
             }
             }
     

    render() {
      return (
        <div>  
            <h1>{`我 ${this.state.f1} ${this.state.f2} ${this.state.f3}`}</h1>
            <h1>{'萝卜'}</h1>  
            <button onClick={this.Fischange1}> {this.state.f1==='喜欢萝卜'?'不喜欢':'喜欢'}</button>
            <button onClick={this.Secchange1}> {this.state.f1==='喜欢萝卜'?'最喜欢':'不是最喜欢'}</button>
            <h1>{'白菜'}</h1>  
            <button onClick={this.Fischange2}> {this.state.f2==='喜欢白菜'?'不喜欢':'喜欢'}</button>
            <button onClick={this.Secchange2}> {this.state.f2==='喜欢白菜'?'最喜欢':'不是最喜欢'}</button>
            <h1>{'番茄'}</h1>  
            <button onClick={this.Fischange3}> {this.state.f3==='喜欢番茄'?'不喜欢':'喜欢'}</button>
            <button onClick={this.Secchange3}> {this.state.f3==='喜欢番茄'?'最喜欢':'不是最喜欢'}</button>
        </div>
      );
    }
  }
  
  const App=(props,context)=>{

    return (
      <div>
          <C f/>
          </div>
    )
  }

ReactDOM.render(<App />, document.getElementById('root'));

