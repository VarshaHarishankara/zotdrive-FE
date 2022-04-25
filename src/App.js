import React, { Component } from 'react'
import { ZDDashboard } from './Views/ZDDashboard';
class App extends Component {
  state = {
    clients: []
  };

  async componentDidMount() {
    // const response = await fetch('/file-chunk');
    // console.log(response);
    // const body = await response.json();
    
    // this.setState({clients: body});
  }

  render() {
    const {clients} = this.state;
    return (
        <div className="App">
          <ZDDashboard/>
        </div>
    );
  }
}
export default App;
