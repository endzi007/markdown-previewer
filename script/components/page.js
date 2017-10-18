import React from 'react';
import MarkdownComponent from './markdownComponent';
import TextboxComponent from './textboxComponent';


class Page extends React.Component{
    constructor(){
        super();
        this.state ={
            val: ""
        }
    }
    changeVal (value){
        this.setState({
            val: value
        })
    }
    render() {
        return (
            <div className="page">
                <TextboxComponent changeVal = {this.changeVal.bind(this)} markdown={this.state.val} />  
                <MarkdownComponent markdown={this.state.val} />
            </div>
        );
    }
}

export default Page;