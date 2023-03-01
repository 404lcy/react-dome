import ReactDom from 'react-dom'
const Element = () => {
    return <div>函数组件 需要大写 渲染组件时用组件名的标签 </div>
}
ReactDom.render(<Element />, document.getElementById('root'))