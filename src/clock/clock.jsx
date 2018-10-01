/**
 * More typical structure: main file importing the others recursively. Only watch main file for changes
 * and bundle together.
 */

import AnalogDisplay from "./analogDisplay"
import DigitalDisplay from "./digitalDisplay"

class Clock extends React.Component {
  constructor(props) {
    super(props)
    this.state = {currentTime: (new Date()).toLocaleString()}
    this.launchClock()
  }

  launchClock() {
    setInterval(()=>{
      console.log('Updating time...')
      this.setState({
        currentTime: (new Date()).toLocaleString()})
    }, 1000)
  }

  render() {
    return (
    <div>
      <AnalogDisplay time={this.state.currentTime}/>
      <DigitalDisplay time={this.state.currentTime}/>
    </div>
    )
  }
}

ReactDOM.render(
  <Clock/>,
  document.getElementById('content')
)