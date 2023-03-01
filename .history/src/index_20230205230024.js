import ReactDom from 'react-dom'
import "./base.css"
const name = 'yu'
const ha = (() => {
    return 'nihao'
})
const isOK = true
const render = () => {
    if (isOK) {
        return <div>不显示</div>
    } else {
        return <div>哈哈哈哈</div>
    }
}
const list = ['tom', 'jack', 'tony']
const element = (
    <div>
        <ul className='li'>
            <li>{render()}</li>
            <li>{ha()}</li>
            <li>{name}</li>
        </ul>
        <div className='list'>
            hah
        </div>
        {/* jsx的注释 */}
        {/* 列表渲染 */}
        <ul>{list.map(item => <li key={item}>{item}</li>)}</ul>
    </div>

)
ReactDom.render(element, document.getElementById('root'))