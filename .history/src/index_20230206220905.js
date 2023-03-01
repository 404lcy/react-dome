import ReactDom from 'react-dom'
const Element = () => {
    return <div>函数组件 需要大写 渲染组件时用组件名的标签 </div>
}
const Elements = () => {
    return <div>函数组件 需要大写 渲染组件时用组件名的标签刷卡机发货客户反馈 </div>
}
ReactDom.render(<Element />, document.getElementById('root'))
ReactDom.render(<Element />, <Elements />, document.getElementById('root'))