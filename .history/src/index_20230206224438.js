import ReactDom from 'react-dom'
import Hello from './Hello.js'
import { App } from './button'
ReactDom.render(<>
    <Hello />
    <App></App>
</>, document.getElementById('root'))