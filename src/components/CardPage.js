import React from "react";
import styled from "styled-components";

// Components
import Logo from "./Logo";
import ProgressBar from "./ProgressBar";
import Players from "./Players";
import Button from "./Button";

// Assets
import MoneyBagIcon from "../assets/icons/money-bag.svg";
import NotifyMeIcon from "../assets/icons/notify-me.svg";
import google from "../assets/icons/google-play.svg";
import apple from "../assets/icons/ios-app.svg";

const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  max-width: 1000px;
  width: 90%;
  margin: 0 auto;
`;

const StyledLogo = styled(Logo)`
  display: block;
  margin: 30px auto;
  margin-bottom: 40px;
  width: 200px;
`;

const StyledProgressBar = styled(ProgressBar)`
  max-width: 290px;
  width: 90%;
  margin: 0 auto;
  display: block;
  margin-bottom: 20px;
`;

const Card = styled.div`
  margin: 0 auto;
  background: #f8f8f8;
  border-radius: 20px;
  margin-bottom: 40px;
  padding: 20px 50px;
  color: #686868;
  text-align: center;

  h1,
  p.sub-heading {
    text-transform: uppercase;
  }

  h1 {
    margin-bottom: 10px;
    color: #464646;
    font-size: 1.5rem;
  }

  p.sub-heading {
    font-size: 1.25rem;
    margin-bottom: 5px;
  }

  h2 {
    text-transform: uppercase;
    margin-bottom: 20px;
    font-size: 1.25rem;
  }

  hr {
    margin: 0 auto;
    width: 50%;
    border: 1px solid lightgray;
    margin-bottom: 20px;
  }

  p.smaller-text {
    font-size: 1rem;
    text-transform: none;
    margin-bottom: 20px;
  }
`;

const Buttons = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 0 auto;
  margin-bottom: 10px;
  width: 100%;
  max-width: 450px;

  .download {
    width: 150px;
    cursor: pointer;
  }
`;

const Footer = styled.footer`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  p {
    cursor: pointer;
    margin: 20px 30px;
  }
`;

const CardPage = (props) => {
  return (
    <Center>
      <Wrapper>
        <StyledLogo />
        <Card>
          <StyledProgressBar />
          <h1 className="heading">Your PlayLine is Set!</h1>
          <p className="sub-heading">Come back @ 7:30PM to track it live</p>
          <hr />
          <p className="smaller-text">
            Pro Tip: You can manage your PlayLine's until they go live in the
            upcoming area
          </p>
          <Players players={props.players} />
          <Buttons>
            {/* <img src={google} alt="" />
            <img src={google} alt="" /> */}
            <Button icon={NotifyMeIcon} text="Notify Me" />
            <Button icon={MoneyBagIcon} text="Deposit" />
          </Buttons>
          <hr />
          <h2>Download the App</h2>
          <Buttons>
            <img className="download" src={google} alt="" />
            <img className="download" src={apple} alt="" />
          </Buttons>
        </Card>
        <Footer>
          <p>About</p>
          <p>PLB Bonus</p>
          <p>Contact</p>
          <p>Security</p>
          <p>Responsible Play</p>
          <p>Privacy</p>
          <p>Terms</p>
        </Footer>
      </Wrapper>
    </Center>
  );
};

export default CardPage;
