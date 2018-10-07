// Dumb presentation-only component
class ClickCounterButton extends React.Component {
    render() {
      return (
      <button
        onClick={this.props.clickHandler}
        className="btn">
        Increase counter (Current counter is {this.props.counter})
      </button>
      )
    }
  }

  export default ClickCounterButton;