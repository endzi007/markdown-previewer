import React from 'react';

class TextboxComponent extends React.Component{
    handleChange (e){
        var val = e.target.value;
        this.props.changeVal(val);
    }
    render() {
        return (
            <div className="textbox textboxContainer">
                <p>Type here:</p>
                <textarea onChange = {this.handleChange.bind(this)} name="codeInput" id="codeInput" cols="30" rows="10"></textarea>
            </div>
        );
    }
}

export default TextboxComponent;