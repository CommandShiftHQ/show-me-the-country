import React, { Component } from "react";
import "../styles/InputField.css";

class InputField extends Component {
  constructor() {
    super();
    this.state = {
      inputFieldValue: ""
    };
  }

  captureInputValues = event => {
    const inputFieldValue = event.target.value;

    return this.setState({ inputFieldValue });
  };

  handleOnClick = () => {
    const { gimmeTheSearchValue } = this.props;
    const { inputFieldValue } = this.state;

    gimmeTheSearchValue(inputFieldValue);

    return this.setState({ inputFieldValue: "" });
  };

  render() {
    const { inputFieldValue } = this.state;

    return (
      <form className="search">
        <input
          value={inputFieldValue}
          className="search-term"
          name="country"
          type="text"
          placeholder="Show me the country"
          onChange={this.captureInputValues}
        />
        <button
          className="search-button"
          type="button"
          onClick={this.handleOnClick}
        >
          <span className="fa fa-search"></span>
        </button>
      </form>
    );
  }
}

export default InputField;
