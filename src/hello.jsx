// let helloWorldReactElement = <h1>Hello world yepyep!</h1>
// class HelloWorld extends React.Component {
//   render() {
//     return <div>
//       {helloWorldReactElement}
//       {helloWorldReactElement}
//     </div>
//   }
// }
import HelloWorld from "./helloWorld"
//TODO: import directly the react module 'import ReactDOM from "react"'
ReactDOM.render(
  <HelloWorld/>,
  document.getElementById('content')
)