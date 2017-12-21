import React from 'react';

export class Header extends React.Component {
  render() {
    return(
      <nav className="navbar container-fluid">
        <ul className="nav nav-tabs">
          <li className="nav-item"><a className="nav-link active" href="#">Home</a></li>
          <li className="nav-item"><a className="nav-link " href="#">Dome</a></li>
          <li className="nav-item"><a className="nav-link " href="#">Chrome</a></li>
          <li className="nav-item"><a className="nav-link disabled" href="#">Gnome</a></li>
        </ul>
      </nav>
    );
  }
}
