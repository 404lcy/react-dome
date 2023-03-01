import ReactDom from 'react-dom'
const Element = () => {
    return <div>函数组件 需要大写 渲染组件时用组件名的标签 </div>
}
const Elements = () => {
    return <div>函数组件 需要大写 渲染组件时用组件名的标签刷卡机发货客户反馈 </div>
}
const App = () => {
    return <div>
        <>
            <Element></Element>
            <Elements></Elements>
        </>
    </div>
}
// ReactDom.render(<Element />, document.getElementById('root'))
ReactDom.render(<App />, document.getElementById('root'))