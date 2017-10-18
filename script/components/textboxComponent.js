import React from 'react';

class TextboxComponent extends React.Component{
    handleChange (e){
        var val = e.target.value;
        this.props.changeVal(val);
    }
    render() {
        return (
            <div className="textbox textboxContainer">
                <p>Paste or type here:</p>
                <textarea onChange = {this.handleChange.bind(this)} name="codeInput" id="codeInput" cols="30" rows="10">__enis__</textarea>
            </div>
        );
    }
}

export default TextboxComponent;