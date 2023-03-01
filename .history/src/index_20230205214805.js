import ReactDom from 'react-dom'
const name = 'yu'
const element = (
    <div>
        <ul className='li'>
            <li>banana</li>
            <li>banana</li>
            <li>{name}</li>
        </ul>
        <div>
            hah
        </div>
    </div>

)
ReactDom.render(element, document.getElementById('root'))