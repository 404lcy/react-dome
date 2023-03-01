import ReactDom from 'react-dom'
const elsment = (
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
ReactDom.render(elsment, document.getElementById('root'))