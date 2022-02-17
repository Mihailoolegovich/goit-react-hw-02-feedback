import React, { Component } from "react";

class FeedbackOptions extends Component {
    render(){
        return(
            <ul>
            <li>
              <button type="button" name="good" onClick={this.props.onLeaveFeedback()}>
                Good
              </button>
            </li>
            <li>
              <button type="button" name="neutral" onClick={this.addFidback}>
                Neutral
              </button>
            </li>
            <li>
              <button type="button" name="bad" onClick={this.addFidback}>
                Bad
              </button>
            </li>
          </ul>  
        )
    }
}

export default FeedbackOptions;