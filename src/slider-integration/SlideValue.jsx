// Decoupled with custom events, uses a jquery plugin defined in index.html <script> block
class SlideValue extends React.Component {

    constructor(props) {
        super(props);
        this.state = { sliderValue: 0}; 
        this.handleSlide = this.handleSlide.bind(this);
    }

    handleSlide(event) {
        this.setState({sliderValue: event.detail.ui.value});
    }

    componentDidMount() {
        window.addEventListener('slide', this.handleSlide);
    }

    componentWillUnmount() {
        window.addEventListener('slide', this.handleSlide);
    }

    render() {
        return (
            <div className="">
            Value: {this.state.sliderValue}
            </div>
        )
    }
}

export default SlideValue;