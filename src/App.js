import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ''
    }
    this.changeName = this.changeName.bind(this);
  }

  changeName(event) {
    this.setState( {name: event.currentTarget.value} )
  }

  render() {
    return (
      <div>
        <form>
          <label htmlFor="name">Nombre:</label>
          <input
          id="name"
          type="text"
          value={this.state.name}
          onChange={this.changeName}
          />
        </form>
        <div>
          <h1 onChange={this.changeName}>{this.state.name}</h1>
        </div>
      </div>
      
    )
  }
}

export default App;