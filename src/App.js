import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='outer-container'>
        <header role='banner' className='main-banner'>
          <a className='nav-bar-brand' href='/'><h1>Portfolio</h1></a>
          <nav className='nav-bar'>
              <ul className='nav-bar-menu'>
                <li  className='nav-bar-menu-item'><a href="page1.html">My Bio</a></li>
                <li  className='nav-bar-menu-item'><a href="page2.html">Skills</a></li>
                <li  className='nav-bar-menu-item'><a href="page3.html">Projects</a></li>
                <li  className='nav-bar-menu-item'><a href="page4.html">Contact</a></li>
              </ul>
          </nav>
        </header>
        <main>
        </main>
      </div>
    );
  }
}

export default App;
