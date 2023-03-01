import ReactDom from 'react-dom'
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
const element = (
    <div>
        <ul className='li'>
            <li>{render()}</li>
            <li>{ha()}</li>
            <li>{name}</li>
        </ul>
        <div>
            hah
        </div>
        {/* jsx的注释 */}
    </div>

)
ReactDom.render(element, document.getElementById('root'))