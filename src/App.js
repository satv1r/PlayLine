import React, { useState, useEffect, Fragment } from "react";
import GlobalStyle from "./components/GlobalStyle";
import CardPage from "./components/CardPage";

const App = () => {
  //State
  const [playersData, setPlayersData] = useState([]);

  // Functions
  const getPlayersData = async () => {
    const res = await fetch(
      "https://cors-anywhere.herokuapp.com/https://playline-dev-test.s3-us-west-2.amazonaws.com/playline-test.json"
    );
    const data = await res.json();
    setPlayersData(data.players);
  };

  // Effects
  useEffect(() => {
    getPlayersData();
  }, []);

  return (
    <Fragment>
      <GlobalStyle />
      <CardPage players={playersData} />
    </Fragment>
  );
};

export default App;
