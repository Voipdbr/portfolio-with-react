import React, {useState, useEffect} from 'react';
import { cuboDado } from '../../models/cubo';
import './css/Cube.css';

function Cubo() {

  const defaultColor = "rgb(14, 14, 14)";

  const [click, setClick] = useState(1);
  
  function Cube(number: any){
    return(cuboDado.map((dados) => {
      if(dados.id == number){
      return (
      <React.Fragment key={dados.id}>
        <style>
          {
            `
            .cubo${dados.id} {
              position: relative;
              width: 300px;
              height: 300px;
              transform-style: preserve-3d;
              animation: animate 4s linear infinite;
            }
            
            @keyframes animate{
              0%{
                transform: rotateX(-30deg) rotateY(0deg) translateY(0px);
              }
              50%{
                transform: rotateX(-30deg) rotateY(180deg)translateY(100px);
              }
              100%{
                transform: rotateX(-30deg) rotateY(360deg) translateY(0px);
              }
            }

            .cube-image {
              width: 250px;
              max-width: 100%;
              position: relative;
              text-align: center;
              margin-left: 30px;
              margin-top: -200px;
              top: 200px;
              margin-bottom: -200px;
              background-image: "./images/ismaeljose.";
              transform-style: preserve-3d;
              transition: 1s;
              animation: animate2 4s linear infinite;
            }
            
            @keyframes animate2{
              0%{
                transform: rotateX(-30deg) rotateY(0deg) translateY(0px) translateZ(200px);
                z-index: 1;
              }
              50%{
                transform: rotateX(-30deg) rotateY(180deg) translateY(100px) translateZ(200px);
                z-index: 0;
              }
              100%{
                transform: rotateX(-30deg) rotateY(360deg) translateY(0px) translateZ(200px);
                z-index: 1;
              }
            }
            
            .cubo${dados.id} div{
              position: absolute;
              top: 200px;
              left: 0;
              width: 100%;
              height: 100%;
              transform-style: preserve-3d;
              cursor: pointer;
            }
  
            .cubo${dados.id} div span{
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              background: linear-gradient(${defaultColor}, ${dados.color1});
              transform: rotateY(calc(90deg * var(--i))) translateZ(150px);
            }
      
            .cube-top{
              position: absolute;
              top: 0;
              left: 0;
              width: 300px;
              height: 300px;
              background: ${defaultColor};
              transform: rotateX(90deg) translateZ(150px);
              cursor: pointer;
            }
            
            .cube-top::before{
              transform: translateZ(-400px);
            }
            
            .cube-down${dados.id}{
              transform: rotateX(90deg) translateZ(150px);
            }

            .cube-down${dados.id}::before{
              content: '';
              position: absolute;
              top: 0;
              left: 0;
              width: 300px;
              height: 300px;
              background: ${dados.color1};
              transform: translateZ(-400px);
              filter: blur(20px);
              box-shadow: 0 0 120px ${dados.color1};
              animation: cube-down${dados.id} 4s linear infinite;
              cursor: auto;
            }
      
            @keyframes cube-down${dados.id}
            {
              0%{
                filter: blur(20px);
                background: ${dados.color1};
                box-shadow: 0 0 120px ${dados.color1};
              }
              50%{
                filter: blur(100px);
                background: ${dados.color2};
                box-shadow: 0 0 500px ${dados.color2};
              }
              100%{
                filter: blur(20px);
                background: ${dados.color1};
                box-shadow: 0 0 120px ${dados.color1};
              }
            }
          
          @media screen and (max-width:1050px) {
            .cubo${dados.id} {
              position: relative;
              width: 200px;
              height: 200px;
              transform-style: preserve-3d;
              animation: animate 4s linear infinite;
            }          

            .cubo${dados.id} div span{
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              background: linear-gradient(${defaultColor}, ${dados.color1});
              transform: rotateY(calc(90deg * var(--i))) translateZ(100px);
            }

            .cube-image {
              width: 200px;
              max-width: 100%;
              position: relative;
              text-align: center;
              margin-left: 30px;
              top: 200px;
              margin-top: -200px;
              margin-bottom: -150px;
              background-image: "./images/ismaeljose.";
              transform-style: preserve-3d;
              transition: 1s;
              animation: animate2 4s linear infinite;
            }

            @keyframes animate2{
              0%{
                transform: rotateX(-30deg) rotateY(0deg) translateY(0px) translateZ(150px);
                z-index: 1;
              }
              50%{
                transform: rotateX(-30deg) rotateY(180deg) translateY(100px) translateZ(150px);
                z-index: 0;
              }
              100%{
                transform: rotateX(-30deg) rotateY(360deg) translateY(0px) translateZ(150px);
                z-index: 1;
              }
            }

            .cube-top{
              position: absolute;
              top: 0;
              left: 0;
              width: 200px;
              height: 200px;
              background: ${defaultColor};
              transform: rotateX(90deg) translateZ(100px);
              cursor: pointer;
            }

            .cube-down${dados.id}{
              transform: rotateX(90deg) translateZ(100px);
            }

            .cube-down${dados.id}::before{
              content: '';
              position: absolute;
              top: 0;
              left: 0;
              width: 200px;
              height: 200px;
              background: ${dados.color1};
              transform: translateZ(-300px);
              filter: blur(20px);
              box-shadow: 0 0 120px ${dados.color1};
              animation: cube-down${dados.id} 4s linear infinite;
              cursor: auto;
            }

            .cube-btn-left{
              display: block;
              margin: 20px;
              margin-top: 150px;
              float: left;
              position: relative;
              border-radius: 50%;
              font-size: 50px;
              font-weight: bolder;
              padding: 20px;
            }
            
            .cube-btn-right{
              display: block;
              margin: 20px;
              margin-top: 150px;
              float: right;
              border-radius: 50%;
              font-size: 50px;
              font-weight: bolder;
              padding: 20px;
            }

            .cube-title {
              position: relative;
              text-align: center;
              margin-top: -300px;
              top: 300px;              
              transform-style: preserve-3d;
              animation: animate 4s linear infinite;
            }

            @keyframes cube-down${dados.id}
            {
              0%{
                filter: blur(20px);
                background: ${dados.color1};
                box-shadow: 0 0 120px ${dados.color1};
              }
              50%{
                filter: blur(80px);
                background: ${dados.color2};
                box-shadow: 0 0 350px ${dados.color2};
              }
              100%{
                filter: blur(20px);
                background: ${dados.color1};
                box-shadow: 0 0 120px ${dados.color1};
              }
            }

          }
          
          @media screen and (max-width:640px) {
            .cubo${dados.id} {
              position: relative;
              width: 100px;
              height: 100px;
              transform-style: preserve-3d;
              animation: animate 4s linear infinite;
            }          

            .cubo${dados.id} div span{
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              background: linear-gradient(${defaultColor}, ${dados.color1});
              transform: rotateY(calc(90deg * var(--i))) translateZ(50px);
            }

            .cube-image {
              width: 100px;
              max-width: 100%;
              position: relative;
              text-align: center;
              margin-left: 30px;
              margin-top: -200px;
              top: 200px;
              margin-bottom: -100px;
              background-image: "./images/ismaeljose.";
              transform-style: preserve-3d;
              transition: 1s;
              animation: animate2 4s linear infinite;
            }

            @keyframes animate2{
              0%{
                transform: rotateX(-30deg) rotateY(0deg) translateY(0px) translateZ(100px);
                z-index: 1;
              }
              50%{
                transform: rotateX(-30deg) rotateY(180deg) translateY(100px) translateZ(100px);
                z-index: 0;
              }
              100%{
                transform: rotateX(-30deg) rotateY(360deg) translateY(0px) translateZ(100px);
                z-index: 1;
              }
            }

            .cube-top{
              position: absolute;
              top: 0;
              left: 0;
              width: 100px;
              height: 100px;
              background: ${defaultColor};
              transform: rotateX(90deg) translateZ(50px);
              cursor: pointer;
            }

            .cube-down${dados.id}{
              transform: rotateX(90deg) translateZ(50px);
            }

            .cube-down${dados.id}::before{
              content: '';
              position: absolute;
              top: 0;
              left: 0;
              width: 100px;
              height: 100px;
              background: ${dados.color1};
              transform: translateZ(-200px);
              filter: blur(20px);
              box-shadow: 0 0 120px ${dados.color1};
              animation: cube-down${dados.id} 4s linear infinite;
              cursor: auto;
            }

            .cube-btn-left{
              display: block;
              margin: 15px;
              margin-top: 100px;
              float: left;
              position: relative;
              border-radius: 50%;
              font-size: 50px;
              font-weight: bolder;
              padding: 15px;
            }
            
            .cube-btn-right{
              display: block;
              margin: 15px;
              margin-top: 100px;
              float: right;
              position: relative;
              border-radius: 50%;
              font-size: 50px;
              font-weight: bolder;
              padding: 15px;
            }

            .cube-title {
              position: relative;
              text-align: center;
              margin-top: -220px;
              top: 200px;
              transform-style: preserve-3d;
              animation: animate 4s linear infinite;
            }

            @keyframes cube-down${dados.id}
            {
              0%{
                filter: blur(20px);
                background: ${dados.color1};
                box-shadow: 0 0 120px ${dados.color1};
              }
              50%{
                filter: blur(50px);
                background: ${dados.color2};
                box-shadow: 0 0 500px ${dados.color2};
              }
              100%{
                filter: blur(20px);
                background: ${dados.color1};
                box-shadow: 0 0 120px ${dados.color1};
              }
            }

          }
          
          @media screen and (max-width:500px) {
            .cubo${dados.id} {
              position: relative;
              width: 100px;
              height: 100px;
              transform-style: preserve-3d;
              animation: animate 4s linear infinite;
            }          

            .cubo${dados.id} div span{
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              background: linear-gradient(${defaultColor}, ${dados.color1});
              transform: rotateY(calc(90deg * var(--i))) translateZ(50px);
            }

            .cube-top{
              position: absolute;
              top: 0;
              left: 0;
              width: 100px;
              height: 100px;
              background: ${defaultColor};
              transform: rotateX(90deg) translateZ(50px);
              cursor: pointer;
            }

            .cube-down${dados.id}{
              transform: rotateX(90deg) translateZ(50px);
            }

            .cube-down${dados.id}::before{
              content: '';
              position: absolute;
              top: 0;
              left: 0;
              width: 100px;
              height: 100px;
              background: ${dados.color1};
              transform: translateZ(-170px);
              filter: blur(20px);
              box-shadow: 0 0 50px ${dados.color1};
              animation: cube-down${dados.id} 4s linear infinite;
              cursor: auto;
            }

            .cube-btn-left{
              display: block;
              margin: 10px;
              margin-top: 100px;
              float: left;
              position: relative;
              border-radius: 50%;
              font-size: 50px;
              font-weight: bolder;
              padding: 10px;
            }
            
            .cube-btn-right{
              display: block;
              margin: 10px;
              margin-top: 100px;
              float: right;
              position: relative;
              border-radius: 50%;
              font-size: 50px;
              font-weight: bolder;
              padding: 10px;
            }

            .cube-title {
              position: relative;
              text-align: center;
              margin-top: -170px;
              top: 200px;
              transform-style: preserve-3d;
              animation: animate 4s linear infinite;
            }

            @keyframes cube-down${dados.id}
            {
              0%{
                filter: blur(20px);
                background: ${dados.color1};
                box-shadow: 0 0 120px ${dados.color1};
              }
              50%{
                filter: blur(30px);
                background: ${dados.color2};
                box-shadow: 0 0 500px ${dados.color2};
              }
              100%{
                filter: blur(20px);
                background: ${dados.color1};
                box-shadow: 0 0 120px ${dados.color1};
              }
            }
          
          }

          @media screen and (max-width:360px) {
            .cubo${dados.id} {
              position: relative;
              width: 75px;
              height: 75px;
              transform-style: preserve-3d;
              animation: animate 4s linear infinite;
            }          

            .cubo${dados.id} div span{
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              background: linear-gradient(${defaultColor}, ${dados.color1});
              transform: rotateY(calc(90deg * var(--i))) translateZ(37px);
            }

            .cube-image {
              width: 50px;
              max-width: 100%;
              position: relative;
              text-align: center;
              margin-left: 30px;
              margin-top: -200px;
              top: 200px;
              margin-bottom: -50px;
              background-image: "./images/ismaeljose.";
              transform-style: preserve-3d;
              transition: 1s;
              animation: animate2 4s linear infinite;
            }

            @keyframes animate2{
              0%{
                transform: rotateX(-30deg) rotateY(0deg) translateY(0px) translateZ(50px);
                z-index: 1;
              }
              50%{
                transform: rotateX(-30deg) rotateY(180deg) translateY(100px) translateZ(50px);
                z-index: 0;
              }
              100%{
                transform: rotateX(-30deg) rotateY(360deg) translateY(0px) translateZ(50px);
                z-index: 1;
              }
            }

            .cube-top{
              position: absolute;
              top: 0;
              left: 0;
              width: 75px;
              height: 75px;
              background: ${defaultColor};
              transform: rotateX(90deg) translateZ(37px);
              cursor: pointer;
            }

            .cube-down${dados.id}{
              transform: rotateX(90deg) translateZ(37px);
            }

            .cube-down${dados.id}::before{
              content: '';
              position: absolute;
              top: 0;
              left: 0;
              width: 75px;
              height: 75px;
              background: ${dados.color1};
              transform: translateZ(-90px);
              filter: blur(20px);
              box-shadow: 0 0 50px ${dados.color1};
              animation: cube-down${dados.id} 4s linear infinite;
              cursor: auto;
            }

            .cube-btn-left{
              display: block;
              margin: 10px;
              margin-top: 50px;
              float: left;
              position: relative;
              border-radius: 50%;
              font-size: 25px;
              font-weight: bolder;
              padding: 10px;
            }
            
            .cube-btn-right{
              display: block;
              margin: 10px;
              margin-top: 5px;
              float: right;
              position: relative;
              border-radius: 50%;
              font-size: 25px;
              font-weight: bolder;
              padding: 10px;
            }

            .cube-title {
              position: relative;
              text-align: center;
              font-size: 20px;
              margin-top: -100px;
              top: 200px;
              transform-style: preserve-3d;
              animation: animate 4s linear infinite;
            }

            @keyframes cube-down${dados.id}
            {
              0%{
                filter: blur(10px);
                background: ${dados.color1};
                box-shadow: 0 0 120px ${dados.color1};
              }
              50%{
                filter: blur(20px);
                background: ${dados.color2};
                box-shadow: 0 0 500px ${dados.color2};
              }
              100%{
                filter: blur(10px);
                background: ${dados.color1};
                box-shadow: 0 0 120px ${dados.color1};
              }
            }
          
          }
            `
          }
        </style>
          <td>
          <img className="cube-image" src={dados.image}/>
          <a href={dados.hrf}>
          <div className={`cubo${dados.id}`}>
            <div className="cube-top"></div>
            <div>
                <span className="i0"></span>
                <span className="i1"></span>
                <span className="i2"></span>
                <span className="i3"></span>
            </div>
            <div className={`cube-down${dados.id}`}></div>
          </div>
          </a>
          <h1 className="cube-title" style={{"color": "white"}}>{dados.nameCube}</h1>
          </td>
        </React.Fragment>);
  }else{
  }}))};
  
  const [cube, setCube] = useState(
    Cube(click)
  );
  
  return (
    <main id="Projects" style={{"marginBottom": "100%"}}>
    <div>
    <button className="cube-btn-left" onClick={() => {
      const calc = click - 1;
      if(calc < 1){
        setClick(cuboDado.length)
        console.log("Left | " + calc)
        setCube(Cube(cuboDado.length));
      }else{
      const calc = click - 1;
      setClick(calc);
      console.log("Left | " + click)
      setCube(Cube(calc));
    }}}>←</button>
    <table className="table-cube">
    <tr>
    {cube}
    </tr>
    </table>
    <button className="cube-btn-right" onClick={() => {
      if(click >= cuboDado.length){
      setClick(1)
      console.log("Right | " + click + "click 6")
      setCube(Cube(1));
      }else{
      const calc = click + 1;
      setClick(calc);
      console.log("Right | " + calc + "asdasd")
      setCube(Cube(calc));
    }}}>→</button>
    </div>
    </main>
  );
}

export default Cubo;
