let helloWorldReactElement = <h1>Hello world changed!</h1>
class HelloWorld extends React.Component {
  render() {
    return <div>
      {helloWorldReactElement}
      {helloWorldReactElement}
    </div>
  }
}

export default HelloWorld