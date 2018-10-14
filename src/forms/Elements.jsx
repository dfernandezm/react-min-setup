class Elements extends React.Component {
    constructor(props) {
        super(props);
        this.handleRadio = this.handleRadio.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            description: `With the right pattern, applications will be more scalable and easier to maintain.
    If you aspire one day to become a Node.js architect (or maybe you're already one and want to extend your knowledge), this presentation is for you.`,
            radioGroup: {
              angular: false,
              react: true,
              polymer: false
            },
            checkboxGroup: {
              node: false,
              react: true,
              express: false,
              mongodb: false
            },
            selectedValue: 'node'
          }
    }

    handleRadio(event) {
        let obj = {}
        obj[event.target.value] = event.target.checked // true
        this.setState({radioGroup: obj})
    }

    handleSubmit(event) {
        //React attaches events to the level document, not to nodes themselves,
        // this accesses native event, may not work in current versions or React!
        event.nativeEvent.stopImmediatePropagation();
        console.log("Submitted");
    }

    render() {
       return ( 
         <form  onSubmit={this.handleSubmit}>
            <label>
                <input type="radio" name="radioGroup" value='angular' 
                    checked={this.state.radioGroup['angular']} onChange={this.handleRadio}/>
                    Angular
            </label>
            <br/>
            <label>
                <input type="radio" name="radioGroup" value='react' checked={this.state.radioGroup['react']} onChange={this.handleRadio}/>
                    React
            </label>
            <br/>
            <label>
                <input type="radio" name="radioGroup" value='polymer' checked={this.state.radioGroup['polymer']} onChange={this.handleRadio}/>
                Polymer
            </label>
        </form>
       )
    }
}

export default Elements;