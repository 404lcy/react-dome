import ReactDom from 'react-dom'
const name = 'yu'
const ha = (() => {
    return 'nihao'
})
const element = (
    <div>
        <ul className='li'>
            <li>banana</li>
            <li>{ha()}</li>
            <li>{name}</li>
        </ul>
        <div>
            hah
        </div>
    </div>

)
ReactDom.render(element, document.getElementById('root'))