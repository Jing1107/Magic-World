import React, {Component} from 'react';
import styled from 'styled-components';


export default class Default extends Component {
  render() {
    return (
      <Body className="bg-purple">

          <div className="central-body">
            <img className="image-404" src="http://salehriaz.com/404Page/img/404.svg" width="300px" />
            <a href="https://magic-world.herokuapp.com/" className="btn-go-home" target="_blank">GO BACK HOME</a>
          </div>
          <div className="objects">
            <img className="object_rocket" src="http://salehriaz.com/404Page/img/rocket.svg" width="40px" />
            <div className="earth-moon">
              <img className="object_earth" src="http://salehriaz.com/404Page/img/earth.svg" width="100px" />
              <img className="object_moon" src="http://salehriaz.com/404Page/img/moon.svg" width="80px" />
            </div>
            <div className="box_astronaut">
              <img className="object_astronaut" src="http://salehriaz.com/404Page/img/astronaut.svg" width="140px" />
            </div>
          </div>

    </Body>
    )
  }
}

const Body = styled.body`
  @-moz-keyframes rocket-movement { 100% {-moz-transform: translate(1200px,-600px);} }
  @-webkit-keyframes rocket-movement {100% {-webkit-transform: translate(1200px,-600px); } }
  @keyframes rocket-movement { 100% {transform: translate(1200px,-600px);} }
  @-moz-keyframes spin-earth { 100% { -moz-transform: rotate(-360deg); transition: transform 20s;  } }
  @-webkit-keyframes spin-earth { 100% { -webkit-transform: rotate(-360deg); transition: transform 20s;  } }
  @keyframes spin-earth{ 100% { -webkit-transform: rotate(-360deg); transform:rotate(-360deg); transition: transform 20s; } }

  @-moz-keyframes move-astronaut {
    100% { -moz-transform: translate(-160px, -160px);}
  }
  @-webkit-keyframes move-astronaut {
    100% { -webkit-transform: translate(-160px, -160px);}
  }
  @keyframes move-astronaut{
    100% { -webkit-transform: translate(-160px, -160px); transform:translate(-160px, -160px); }
  }
  @-moz-keyframes rotate-astronaut {
    100% { -moz-transform: rotate(-720deg);}
  }
  @-webkit-keyframes rotate-astronaut {
    100% { -webkit-transform: rotate(-720deg);}
  }
  @keyframes rotate-astronaut{
    100% { -webkit-transform: rotate(-720deg); transform:rotate(-720deg); }
  }

  .bg-purple {
    background: linear-gradient(to right, #bdc3c7, #2c3e50) !important;
  }

  .btn-go-home{
    position: relative;
    z-index: 200;
    margin: 15px auto;
    width: 100px;
    padding: 10px 15px;
    border: 1px solid #FFCB39;
    border-radius: 100px;
    font-weight: 400;
    display: block;
    // color: white;
    text-align: center;
    text-decoration: none;
    letter-spacing : 2px;
    font-size: 11px;

    -webkit-transition: all 0.3s ease-in;
    -moz-transition: all 0.3s ease-in;
    -ms-transition: all 0.3s ease-in;
    -o-transition: all 0.3s ease-in;
    transition: all 0.3s ease-in;
  }

  .btn-go-home:hover{
    background-color: #6c613f;
    color: #fff;
    transform: scale(1.05);
    box-shadow: 0px 20px 20px rgba(0,0,0,0.1);
  }

  .central-body{
    padding: 17% 5% 10% 5%;
    text-align: center;
  }

  .object_rocket{
    z-index: 95;
    position: absolute;
    transform: translateX(-50px);
    top: 75%;
    pointer-events: none;
    animation: rocket-movement 200s linear infinite both running;
  }

  .object_earth{
    position: absolute;
    top: 20%;
    left: 15%;
    z-index: 90;
  }

  .box_astronaut{
    z-index: 110 !important;
    position: absolute;
    top: 60%;
    right: 20%;
    will-change: transform;
    animation: move-astronaut 50s infinite linear both alternate;
  }

  .image-404{
    position: relative;
    z-index: 100;
    pointer-events: none;
  }

  @media only screen and (max-width: 600px){
    .box_astronaut{
      top: 70%;
    }

    .central-body{
      padding-top: 25%;
    }
  }

`
