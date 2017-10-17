import React from 'react';

class MarkdownComponent extends React.Component {
    render (){
        return(
            <div className="markdown textboxContainer">
                <p>Result:</p>
                <textarea name="codeInput" id="codeInput" cols="30" rows="10" disabled></textarea>
            </div>
        );
    }
}

export default MarkdownComponent;