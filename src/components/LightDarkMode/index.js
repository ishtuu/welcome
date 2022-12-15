import {Component} from 'react'

import './index.css'

class LightDarkMode extends Component {
  state = {
    mode: 'isDarkMode',
  }

  onClickButton = () => {
    this.setState(prevState => ({isDarkMode: !prevState}))
  }

  render() {
    const {isDarkMode} = this.state
    const {modeClassName} = isDarkMode ? 'is-dark' : 'is-light'
    const {buttonText} = isDarkMode ? 'Light Mode' : 'Dark Mode'

    return (
      <div className="bg-container">
        <div className={`container ${modeClassName}`}>
          <h1> Click to Change Mode</h1>
          <button type="button" onClick={this.onClickButton} className="button">
            {buttonText}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
