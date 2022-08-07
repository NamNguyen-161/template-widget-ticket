import React from "react";
import Button from "../Button";
import "./wrapper.scss";
import "../styles/global.scss";
import ProcessBar from "../ProcessBar/processBar";
import Header from "./Header";
import Main from "./Main";

export interface WrapperProps {}

const Wrapper = (props: WrapperProps) => {
  return (
    <div className="wrapper_widget">
      <Header />
      <div className="process_bar">
        <ProcessBar />
      </div>
      <div className="main">
        <Main />
      </div>
      <div className="footer">
        <Button label="Connect Wallet" />
      </div>
    </div>
  );
};

export default Wrapper;
