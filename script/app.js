import React from 'react';
import ReactDOM from 'react-dom';
import {MarkdownComponent} from './components/markdownComponent';
import TextboxComponent from './components/textboxComponent';
require('../styles/main.scss');

ReactDOM.render(
    <div>
        <h1>Hello from react </h1>
        <TextboxComponent title="optionalTitle" />
        <MarkdownComponent title ="markdown title"/>
    </div>,

document.getElementById("root"));
