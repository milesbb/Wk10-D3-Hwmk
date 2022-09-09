import { Component } from "react";
import { Alert } from "react-bootstrap";

class Warning extends Component {
  render() {
    return (
      <Alert className="m-1" variant={this.props.variant}>
        {this.props.message}
      </Alert>
    );
  }
}

export default Warning;
