// Write your code here.
import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {count: 0}

  onEnterInputText = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  render() {
    const {count} = this.state
    const jsxElement = (
      <div className="bg-container">
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
            className="image"
          />
        </div>
        <div className="sub-container">
          <h1>Calculate the Letters you enter</h1>
          <div className="input-container">
            <label htmlFor="userInput">Enter the phrase</label>
            <input
              onChange={this.onEnterInputText}
              type="text"
              placeholder="calculater"
              id="userInput"
            />
            <p>No.of letters: {count}</p>
          </div>
        </div>
      </div>
    )
    return jsxElement
  }
}
export default LettersCalculator
