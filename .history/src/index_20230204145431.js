// //负责创建一个react的项目
import React from "react";
// //负责创建一个项目的节点
import ReactDom from 'react-dom';
// 负责创建react元素
// import React from 'react'
// 负责把react元素渲染到页面
// import ReactDom from 'react-dom'
// const element = React.createElement('h1', { id: 'el' }, 'Hello React')
// ReactDom.render(element, document.getElementById('root'))
const h = React.cloneElement('h1', { title: '我是标题' }, 'Hello react');
ReactDom.render(h, document.getElementById('root'))