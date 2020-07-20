import React from "react";
import ReactDOM from "react-dom";

class Test extends React.Component {
  render() {
    return (
      <div>
        <div>HELLO World</div>
      </div>
    );
  }
}

ReactDOM.render(<Test />, document.getElementById("app"));
