import React from 'react';

class TextboxComponent extends React.Component{
    render() {
        return (
            <div className="textbox textboxContainer">
                <p>Paste or type here:</p>
                <textarea name="codeInput" id="codeInput" cols="30" rows="10"></textarea>
            </div>
        );
    }
}

export default TextboxComponent;