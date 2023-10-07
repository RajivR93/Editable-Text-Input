import {Component} from 'react'

import './index.css'

class EditText extends Component {
  state = {text: '', isEditable: false}

  editText = event => {
    this.setState({text: event.target.value})
  }

  onClickButton = () => {
    this.setState(prev => ({isEditable: !prev.isEditable}))
  }

  render() {
    const {text, isEditable} = this.state

    return (
      <div className="app-container">
        <div className="text-container">
          <h1 className="head">Editable Text Input</h1>
          <div className="input-container">
            {isEditable ? (
              <p className="text">{text}</p>
            ) : (
              <input
                type="text"
                value={text}
                onChange={this.editText}
                className="text-box"
              />
            )}
            {isEditable ? (
              <button
                type="button"
                className="edit-button"
                onClick={this.onClickButton}
              >
                Edit
              </button>
            ) : (
              <button
                type="button"
                className="save-button"
                onClick={this.onClickButton}
              >
                Save
              </button>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default EditText
