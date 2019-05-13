import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: ''
    }
    this.changeName = this.changeName.bind(this);
    this.changeDescription = this.changeDescription.bind(this);
  }

  changeName(event) {
    this.setState( {name: event.currentTarget.value} )
  }

  changeDescription(event) {
    this.setState( {description: event.currentTarget.value} )
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
          <label htmlFor="description">Sinopsis:</label>
          <textarea
          id="description"
          value={this.state.description}
          onChange={this.changeDescription}
          />
        </form>
        <div>
          <h1 onChange={this.changeName}>{this.state.name}</h1>
          <h2 onChange={this.changeDescription}>{this.state.description}</h2>
        </div>
      </div>
      
    )
  }
}

export default App;