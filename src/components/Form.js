import React from 'react';

class Form extends React.Component {
  render() {
    const { name, changeName, description, changeDescription, language, changeLanguage} = this.props
    return (
      <form>
        <label htmlFor="name">Nombre:</label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={changeName}
        />
        <label htmlFor="description">Sinopsis:</label>
        <textarea
          id="description"
          value={description}
          onChange={changeDescription}
        />
        <select value={language} onChange={changeLanguage}>
          <option value="Español">Español</option>
          <option value="Inglés">Inglés</option>
          <option value="Portugués">Portugués</option>
        </select>
</form>
  )}
}

export default Form;