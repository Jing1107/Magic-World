import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import logo from '../logo.svg';
import styled from 'styled-components';
import {ButtonContainer} from './Button';
import gryffindor from './img/gryffindor-1.jpg';
import slytherin from './img/slytherin.jpg';
import Hufflepuff from './img/Hufflepuff.jpg';
import Ravenclaw from './img/Ravenclaw-1.jpg';

import soundFile from './img/BGM.mp3';


export default class Home extends Component {
  // constructor(){
  //  super();
  //  this.onPlay = this.onPlay.bind(this);
  //  this.sound = new Audio(soundFile);
  // }
  //
  //  onPlay(){
  //    this.sound.play();
  //  }

  render() {
    return (
      <DivWrapper>
        <div className="container abb">
          <div className="row">
            <div className="col">
              <img className= "pic" src={gryffindor} />
            </div>
            <div className="col">
              <img className= "pic" src={slytherin} />
            </div>
            <div className="w-100"></div>
            <div className="col">
              <img className="pic" src={Hufflepuff} />
            </div>
            <div className="col">
              <img className="pic-1" src={Ravenclaw} />
            </div>
          </div>
        </div>
      </DivWrapper>
    );
  }
}

const DivWrapper = styled.div`
  .pic {
    width: 18rem;
    margin-left: 8rem;
    position: relative;
    z-index: -10%;
  }
  .pic-1 {
    width: 21rem;
    margin-left: 7rem;
  }
`
