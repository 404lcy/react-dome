
// import React from "react";
// import ReactDOM from "react-dom";
// const div=React.createElement('div', {className:'dome'},'我是一个盒子')
// ReactDOM.render(div,document.getElementById('root'))

// 引入React核心库
import React from "react";
// import ReactDOM from "react-dom";
// 引入App组件
import App from './App'
// ReactDOM.render(<App/>,document.getElementById('root'))
// 使用createRoot
import { createRoot } from 'react-dom/client';
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App/>);
