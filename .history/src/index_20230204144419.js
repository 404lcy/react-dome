//负责创建一个react的项目
import React from "react";
//负责创建一个项目的节点
import ReactDOM from "react-dom"
const h1 = React.cloneElement('h1', { title: '我是标题' }, 'Hello react');
ReactDOM.render(h1, document.getElementById('root'))