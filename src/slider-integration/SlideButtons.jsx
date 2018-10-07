class SlideButtons extends React.Component {

    constructor(props) {
        super(props);
        this.state = { sliderValue: 0}; 
        this.handleSlide = this.handleSlide.bind(this);
    }

    // jquery passes two objects: jquery event and ui object containing current slider value
    handleSlide(event, ui) {
        this.setState({sliderValue: ui.value});
    }

    // handle click on the buttons by return a function that changes both jquery value and the React component state
    handleChange(value) { // value is either 1 or -1
        // returns a function! 
        return () => {
            //jquery specific to update the slider value
            $("#slider").slider('value', this.state.sliderValue + value)
            this.setState({sliderValue: this.state.sliderValue + value})           
        }
    }

    // define event listener on the jquery element for the 'slide' event
    componentDidMount() {
        $("#slider").on('slide',this.handleSlide)
    }

    // release event
    componentWillUnmount() {
        $("#slider").off('slide',this.handleSlide)
    }

    render() {
        return (
            <div>
                <button disabled={(this.state.sliderValue<1) ? true : false}
                    className="btn btn-primary"
                    onClick={this.handleChange(-1)}> {/*See the parentheses, this is a function invocation!!*/}
                    1 Less ({this.state.sliderValue - 1})
                </button>
                <button disabled={(this.state.sliderValue>99) ? true : false}
                    className="btn btn-primary"
                    onClick={this.handleChange(1)}>
                    1 More ({this.state.sliderValue + 1})
                </button>
            </div>
        )
    }
}

export default SlideButtons;