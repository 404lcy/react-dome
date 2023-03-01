
import React from "react";
import ReactDOM from "react-dom";
const div = React.createElement('ul', { className: 'ul' },
    React.createElement('li', null, 'banana'),
    React.createElement('li', null, 'APPLE'), 
    React.createElement('li', null, 'ORANGE'),
)
ReactDOM.render(div, document.getElementById('root'))


