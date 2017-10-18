import React from 'react';
import marked from "marked";
import JsxParser from 'react-jsx-parser'; 

marked.setOptions({
    renderer: new marked.Renderer(),
    gfm: true,
    tables: true,
    breaks: false,
    pedantic: false,
    sanitize: false,
    smartLists: true,
    smartypants: false
  });

class MarkdownComponent extends React.Component {
    render (){
        let text = this.props.markdown;
        text = text.replace(/\s{2}/g, "\n")
        let markdown = marked(text);
        return(
           <JsxParser jsx = {markdown}/>
        );
    }
}

export default MarkdownComponent;