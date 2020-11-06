import React, { useEffect } from "react";
import styled from "styled-components";
import Player from "./Player";

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  li:not(:first-child) {
    margin-left: -15px;
  }

  ul {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    position: relative;
  }

  li {
    position: relative;

    &:hover {
      z-index: 100 !important;
    }
  }
`;

const Players = (props) => {
  let players = [];

  const headshots = require.context("../../public/headshots");

  if (props.players.length > 0) {
    for (let i = 0; i < props.players.length; i++) {
      players.push(
        <Player
          name={props.players[i].last_name}
          points={props.players[i].points}
          image={headshots(`./${props.players[i].last_name}.png`).default}
          unique={i}
          style={{ zIndex: `${7 - i}` }}
          key={props.players[i].last_name}
        />
      );
    }
  }

  return (
    <Wrapper>
      {props.players.length > 0 ? <ul>{players}</ul> : <h2>Loading...</h2>}
    </Wrapper>
  );
};

export default Players;
