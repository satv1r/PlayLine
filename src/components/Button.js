import React from "react";
import styled from "styled-components";

const Icon = styled.div`
  width: fit-content;
  img {
    min-width: 25px;
  }
`;

const Text = styled.div`
  flex-grow: 1;
  text-align: center;
  font-weight: 700;
  font-size: 1rem;
  padding: 0 0.5rem;
  text-transform: uppercase;
`;

const EmptyButton = styled.button`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 40px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 10px 10px;

  background: white;
  border: 1px solid #e4e4e4;
  flex: 1;

  color: #686868;

  &:hover {
    cursor: pointer;
    background: #062145;
    color: white;

    img {
      @keyframes ring {
        0% {
          transform: rotate(0);
        }

        50% {
          transform: rotate(-45deg);
        }

        100% {
          transform: rotate(0deg);
        }
      }

      @keyframes shake {
        0% {
          transform: rotate(0);
        }

        20% {
          transform: rotate(25deg);
        }

        40% {
          transform: rotate(-20deg);
        }

        60% {
          transform: rotate(15deg);
        }

        80% {
          transform: rotate(-10deg);
        }

        100% {
          transform: rotate(0deg);
        }
      }
      animation: 1s shake forwards;
    }
  }
`;

const Button = (props) => {
  return (
    <EmptyButton>
      <Icon>
        <img src={props.icon} />
      </Icon>
      <Text>{props.text}</Text>
    </EmptyButton>
  );
};

export default Button;
