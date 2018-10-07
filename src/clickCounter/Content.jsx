import ClickCounterButton from './ClickCounterButton';

class Content extends React.Component {

    constructor(props) {
        super(props);
        this.state = { counter: 0}; 
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(event) {
        this.setState({ counter: ++this.state.counter})
    }

    render() {
        return (
            <div>
            <ClickCounterButton
                counter={this.state.counter}
                clickHandler={this.handleClick}
                />
            </div>
        )
    }
}

export default Content;