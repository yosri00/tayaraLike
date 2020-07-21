import React from "react";
import ReactDOM from "react-dom";
import Main from "./components/Main.jsx"
class Test extends React.Component {
  render() {
    return (
      <div>
        < Main/>
      </div>
    );
  }
}

ReactDOM.render(<Test />, document.getElementById("app"));
