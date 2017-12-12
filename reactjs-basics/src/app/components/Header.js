import React from 'react';

export class Header extends React.Component {
  render() {
    return(
      <nav className="navbar container-fluid">
        <ul className="nav nav-tabs">
          <li class="nav-item"><a class="nav-link active" href="#">Home</a></li>
          <li class="nav-item"><a class="nav-link " href="#">Dome</a></li>
          <li class="nav-item"><a class="nav-link " href="#">Chrome</a></li>
          <li class="nav-item"><a class="nav-link disabled" href="#">Gnome</a></li>
        </ul>
      </nav>
    );
  }
}
