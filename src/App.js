import React from 'react';
import Form from './components/Form';

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
        <Form name={this.state.name} changeName={this.changeName} description={this.state.description} changeDescription={this.changeDescription} language={this.state.language} changeLanguage={this.changeLanguage} />
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