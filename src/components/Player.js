import React, { useEffect } from "react";
import styled from "styled-components";
import Davis from "../assets/headshots/Davis.png";

const Wrapper = styled.div`
  width: 100px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  transform: translateX(-50px);
  margin-bottom: 20px;
  p {
    text-transform: uppercase;
    margin-bottom: 15px;
  }

  .player-name {
    font-weight: 300;
  }

  .player-points {
    font-weight: 500;
  }

  animation: appear 1s 0.5s forwards ease-in-out;

  @keyframes appear {
    from {
      transform: translateX(-50px);
    }
    to {
      transform: translateX(0);
    }
  }

  .text {
    opacity: 0;
    transform: translateY(-10px);
    animation: textAppear 0.5s 1.5s forwards ease-in-out;
    font-size: 1rem;

    @keyframes textAppear {
      from {
        opacity: 0;
        transform: translateY(-10px);
      }
      to {
        opacity: 1;
        transform: translateY(0px);
      }
    }
  }

  img:hover + .text {
    color: #062145;
  }
`;

const Image = styled.img`
  width: 100px;
  border-radius: 50%;
  border: 5px solid white;
  margin: 0 auto;
  margin-bottom: 15px;
  background: #f8f8f8;
  opacity: 0;
  animation: imageAppear 1s 0.5s forwards ease-in-out;

  @keyframes imageAppear {
    from {
      opacity: 0;
      transform: rotate(270deg);
    }
    to {
      opacity: 1;
      transform: rotate(360deg);
    }
  }

  &:hover {
    transition: 0.25s;
    border: 3px solid #062145;
    background: white !important;
    cursor: pointer;
  }
`;

const Points = styled.span`
  color: black;
  border-radius: 50%;
  border: 1px solid #ddd;
  background: #f1f1f1;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  margin-bottom: 15px;
  width: 50px;
  height: 50px;
  font-weight: 700;
  font-size: 1.25rem;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    background: white;
    width: 90%;
    height: 90%;
    border-radius: 50%;
    border: 1px solid #ddd;

    p {
      margin: 0;
    }
  }
`;

const Player = (props) => {
  const counterAnimation = () => {
    const element = document.getElementById(props.name + props.unique);

    let value = 0;

    const intervalID = setInterval(() => {
      const nextValue = value++;
      if (nextValue > props.points) {
        clearInterval(intervalID);
        return;
      }
      requestAnimationFrame(() => {
        element.textContent = nextValue;
      });
    }, 50);
  };

  useEffect(() => {
    setTimeout(counterAnimation, 1500);
  }, []);

  return (
    <li>
      <Wrapper>
        <Image src={props.image} />
        <div className="text">
          <p className="player-name">{props.name}</p>
          <Points>
            <div>
              <p id={props.name + props.unique}>0</p>
            </div>
          </Points>
          <p className="player-points">PTS</p>
        </div>
      </Wrapper>
    </li>
  );
};

export default Player;
