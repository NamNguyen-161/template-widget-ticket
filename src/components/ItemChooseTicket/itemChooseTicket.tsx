import React, { useState } from "react";
import {
  ExistingLabel,
  ExistingTicket,
  TicketName,
  ExistingNumber,
} from "../Text";
import {
  ButtonCountTicket,
  CircleButton,
  NumberTicket,
  WrapperAvatarTicket,
  WrapperInfoTicket,
  WrapperItemChooseTicket,
} from "./styles";
import AvatarTicket from "../../images/avatar_ticket.png";

export interface IItemChooseTicketProps {}

export default function ItemChooseTicket(props: IItemChooseTicketProps) {
  // const [number, setNumber] = useState<number>(0);
  // const incrementTicket = () => {
  //   setNumber((preValue) => ++preValue);
  // };
  // const decrementTicket = () => {
  //   setNumber((preValue) => (preValue === 0 ? 0 : --preValue));
  // };

  return (
    <WrapperItemChooseTicket>
      <WrapperAvatarTicket backgroundColor="#FFFFFF">
        <img src={AvatarTicket} />
      </WrapperAvatarTicket>
      <WrapperInfoTicket>
        <TicketName color="#000000">Event Name</TicketName>
        <ExistingTicket>
          <ExistingLabel color="#000000">Existing tickets:&nbsp;</ExistingLabel>
          <ExistingNumber>99</ExistingNumber>
        </ExistingTicket>
      </WrapperInfoTicket>
      <ButtonCountTicket backgroundColor="rgba(234, 82, 132, 0.16)">
        <CircleButton
          color="#000000"
          backgroundColor="#FFFFFF"
          // onClick={decrementTicket}
        >
          -
        </CircleButton>
        <NumberTicket color="#000000">{99}</NumberTicket>
        <CircleButton
          color="#FFFFFF"
          backgroundColor="#EA5284"
          // onClick={incrementTicket}
        >
          +
        </CircleButton>
      </ButtonCountTicket>
    </WrapperItemChooseTicket>
  );
}
