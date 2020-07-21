import React from "react";
import "./searchbarcss.css";

class GuestSearchBar extends React.Component {
    constructor(props) {
      super(props);}
   
    render() {
    return (
        <div className="Navbar">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <a className="navbar-brand" href="#">
            Guest Interface
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-item nav-link active" href="#">
                Home <span className="sr-only">(current)</span>
              </a>
            </div>
          </div>
        </nav>
      </div>
        );
    }
  };



export default GuestSearchBar;