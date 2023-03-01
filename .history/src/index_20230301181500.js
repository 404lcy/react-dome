import ReactDOM from 'react-dom'
// import Hello from './Hello.js'
// import { App } from './button'
// ReactDom.render(<>
//     <Hello />
//     <App></App>
// </>, document.getElementById('root'))
function tick() {
    const element = (
        <div>
            <h1>Hello, world!</h1>
            <h2>It is {new Date().toLocaleTimeString()}.</h2>
        </div>
    );
    ReactDOM.render(element, document.getElementById('root'));
}

setInterval(tick, 1000);