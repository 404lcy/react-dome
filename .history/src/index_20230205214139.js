import ReactDom from 'react-dom'
const element = (
    <div>
        <ul className='li'>
            <li>banana</li>
            <li>banana</li>
            <li>apple</li>
        </ul>
        <div>
            hah
        </div>
    </div>

)
ReactDom.render(element, document.getElementById('root'))