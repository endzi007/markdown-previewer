import React from 'react';
import MarkdownComponent from './markdownComponent';
import TextboxComponent from './textboxComponent';


class Page extends React.Component{
    render() {
        return (
            <div className="page">
                <TextboxComponent />  
                <MarkdownComponent />
            </div>
        );
    }
}

export default Page;