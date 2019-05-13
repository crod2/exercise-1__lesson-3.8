import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
      language: ''
    }
    this.changeName = this.changeName.bind(this);
    this.changeDescription = this.changeDescription.bind(this);
    this.changeLanguage = this.changeLanguage.bind(this);
  }

  changeName(event) {
    this.setState( {name: event.currentTarget.value} )
  }

  changeDescription(event) {
    this.setState( {description: event.currentTarget.value} )
  }

  changeLanguage(event) {
    this.setState ( {language: event.currentTarget.value} )
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
          <select value={this.state.language} onChange={this.changeLanguage}>
            <option value="Español">Español</option>
            <option value="Inglés">Inglés</option>
            <option value="Portugués">Portugués</option>
          </select>
        </form>
        <div>
          <h1 onChange={this.changeName}>{this.state.name}</h1>
          <h2 onChange={this.changeDescription}>{this.state.description}</h2>
          <h3 onChange={this.changeLanguage}>{this.state.language}</h3>
        </div>
      </div>
      
    )
  }
}

export default App;