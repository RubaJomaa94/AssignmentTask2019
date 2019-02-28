import React, { Component } from 'react';
import LeftSideMenu from './components/LeftSideMenu';
import './css/main.css';
import axios from 'axios';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Home from './components/Home/Home.js';

library.add(faBars);

class App extends Component {
  state = {
    showLeftSideMenu: false,
    items: [],
  }

  componentDidMount(){
    axios.get("http://demo9606913.mockable.io/menu").then(response => {
      const menuItems = response.data;
      this.setState({items: menuItems});
    });
  }

  showMenu = () => {
    this.setState({showLeftSideMenu: !this.state.showLeftSideMenu});
  }
  render() {
    return (
      <div>
        <div className = "col-12 top-header">
          <i onClick = {this.showMenu} className="menu-icon" title="click to show the side menu"> <FontAwesomeIcon icon="bars" /></i>
        </div>

        <div className="home-page">
          {this.state.showLeftSideMenu && <LeftSideMenu items={this.state.items}/>}
          <Home />
        </div>
      </div>
    );
  }
}

export default App;
