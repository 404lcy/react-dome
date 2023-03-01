
import React from "react";
// import ReactDOM from "react-dom";
import { createRoot } from 'react-dom/client';
const div=React.createElement('div', {className:'dome'},'我是一个盒子')
createRoot(div,document.getElementById('root'))