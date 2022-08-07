import * as React from "react";
import ItemChooseTicket from "../../ItemChooseTicket";
import { MainLabel } from "../../Text";
import { ListTicket } from "./style";

export interface IMainProps {}

export default function Main(props: IMainProps) {
  return (
    <>
      <MainLabel color="#FFFFFF">CHOOSE YOUR TICKET(S)</MainLabel>
      <ListTicket>
        <ItemChooseTicket />
        <ItemChooseTicket />
        <ItemChooseTicket />
        <ItemChooseTicket />
        <ItemChooseTicket />
      </ListTicket>
    </>
  );
}
