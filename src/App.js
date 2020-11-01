import React, { useState, useEffect } from "react";

const App = () => {
  const [playersData, setPlayersData] = useState([]);

  const getPlayersData = async () => {
    const data = await fetch(
      "https://playline-dev-test.s3-us-west-2.amazonaws.com/playline-test.json"
    );
    setPlayersData(data);
  };

  useEffect(() => {
    getPlayersData();
  }, []);

  return (
    <div className="container">
      <h1>Header 1</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia ea
        dolore reiciendis provident, aspernatur esse et facilis nobis natus
        praesentium repellat labore commodi? Voluptate, nisi possimus? Tenetur
        enim corporis porro?
      </p>
    </div>
  );
};

export default App;
