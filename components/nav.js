import React from 'react'
import Link from 'next/link'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleLeft } from '@fortawesome/free-solid-svg-icons';

// const links = [
//   { href: '#', label: 'B00MHAUSEN' },
// ].map(link => ({
//   ...link,
//   key: `nav-link-${link.href}-${link.label}`,
// }))

class Nav extends React.Component {

  testFunction() {
    let nav_menu = document.createElement('div');
    nav_menu.classList.add('nav__menu');
    document.getElementsByTagName('body')[0].appendChild(nav_menu);
  }

  render() {
    return(
      <nav>
        <ul>
          <li>
            <img className="logo" src={'/static/logo.svg'} />
          </li>

          <li className="menu" onClick={this.testFunction}>
            <FontAwesomeIcon icon={faAngleDoubleLeft} />     
          </li>
        </ul>

        <style jsx>{`
          nav {
            background-color: #3d3d3d;
            margin: 0px;
            position: fixed;
            top: 0;
            width: 100%;
            z-index: 1;
          }

          .logo {
            width: 150px;
          }

          ul {
            display: flex;
            list-style: none;
            padding: 12px 5px;
            margin: 0px;
            justify-content: center;
            align-items: center;
          }

          a {
            text-decoration: none;
            color: #e3e3e3;
            font-family: 'Roboto', sans-serif;
            font-weight: 300;
            text-transform: uppercase;
          }

          .menu {
            position: absolute;
            right: 15px;
            color: #e3e3e3;
            width: 15px;
          }

          .menu:hover {
            cursor: pointer;
          }

          .nav__menu {
            height: 100%;
            width: 50%;
            background: #3d3d3d;
            position: fixed;
            right: 0;
            z-index: -1;
          }
        `}</style>
      </nav>
    )
  }
}

export default Nav;