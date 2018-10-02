class Note extends React.Component {
    confirmLeave(event) {
        let confirmationMsg = window.confirm("You really want to leave?");
        event.returnValue = confirmationMsg;
        return confirmationMsg;
    }

    componentDidMount() { // the component is in the DOM, it's available
        console.log('Attaching confirmLeave event listener for beforeunload');
        window.addEventListener('beforeunload', this.confirmLeave);
    }

    componentWillUnMount() {
        console.log('Removing confirmLeave event listener for beforeunload');
        window.removeEventListener('beforeunload', this.confirmLeave);
    }

    render() {
        console.log("render");
        return <div>Here will be our input field for notes (parent will remove in {this.props.secondsLeft} seconds)</div>
    }
}

export default Note;