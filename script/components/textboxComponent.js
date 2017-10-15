import React from 'react';

class TextboxComponent extends React.Component{
    render() {
        return (
            <div className="textbox">{this.props.title}</div>
        );
    }
}

export default TextboxComponent;