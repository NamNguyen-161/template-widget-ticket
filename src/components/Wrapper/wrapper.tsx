import React from "react";
import Button from "../Button";
import "./wrapper.scss";
import "../styles/global.scss";
import { EventNameScreenMintTicket, EventTitleScreenMintTicket } from "../Text";
import IconEvent from "../../images/icon_event.png";
import ProcessBar from "../ProcessBar/processBar";

export interface WrapperProps {}

const Wrapper = (props: WrapperProps) => {
  return (
    <div className="wrapper_widget">
      <div className="header">
        <div className="image">
          <img src={IconEvent} />
        </div>
        <div className="name">
          <EventNameScreenMintTicket>Event Name</EventNameScreenMintTicket>
          <EventTitleScreenMintTicket>Event Title</EventTitleScreenMintTicket>
        </div>
      </div>
      <div className="process_bar">
        <ProcessBar />
      </div>
      <div className="main"></div>
      <div className="footer">
        <Button label="Connect Wallet" />
      </div>
    </div>
  );
};

export default Wrapper;
