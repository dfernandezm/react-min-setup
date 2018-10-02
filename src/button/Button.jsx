class SaveButton extends React.Component {

    constructor(props) { // always remember to pass props here, this fails silently!! if not passed
        super(props);

        // bind 'this' to the class so 'this' can be used to reference the component class from inside
        // the event handler (handleSave)
        this.handleSave = this.handleSave.bind(this);
    }

    handleSave(event) {
        console.log(this, event)
    }

    render() {
        return ( 
            <button onClick={this.handleSave}>
               Save Button
            </button>
        )
    }
}

export default SaveButton;