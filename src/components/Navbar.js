import React, { Component } from 'react';
import {Link} from 'react-router-dom';
//import logo from '../logo.svg';
import logo from '../logo.png';

import styled from 'styled-components';
import {ButtonContainer} from './Button'

export default class Navbar extends Component {
  render() {
    return (
      <NavWrapper className="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top">
        {/*
        https://www.iconfinder.com/icons/1243689/call_phone_icon
        Creative Commons (Attribution 3.0 Unported);
        https://www.iconfinder.com/Makoto_msk */}
        <Link to='/Home'>
          <img src={logo} alt="store" className="navbar-brand" />
        </Link>



        <ul className="navbar-nav align-items-center">
          <li className="nav-item ml-5">
            <Link to="/product" className="nav-link">
              Wand's World
            </Link>
          </li>
        </ul>

        <Link to='/cart' className="ml-auto">
          <ButtonContainer>
            <span className="mr-2">
              <i className="fas fa-cart-plus" />
              my cart
            </span>
          </ButtonContainer>
        </Link>
      </NavWrapper>
    )
  }
}

const NavWrapper = styled.nav`
  background: linear-gradient(to right, #e55d87, #5fc3e4);
  .nav-link {
    color: var(--mainBlue)!important;
    font-size: 1.8rem;
    text-transform: capitalize;
  }
  .navbar-brand {
    width : 8rem;
    margin-left: 8rem;
    margin-right: 5rem;
  }
`
