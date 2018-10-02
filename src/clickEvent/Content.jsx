class Content extends React.Component {

    constructor(props) { // always remember to pass props here, this fails silently!! if not passed
        super(props);

        this.state = { countClicks: 0 };
    }

    handleClick(event) {
        this.setState({ countClicks: ++this.state.countClicks})
    }

    render() {
        return ( 
            <div>
                <button onClick={this.handleClick.bind(this)}>
                    Click me {this.state.countClicks} times!
                </button>
            </div>
        )
    }
}

export default Content;