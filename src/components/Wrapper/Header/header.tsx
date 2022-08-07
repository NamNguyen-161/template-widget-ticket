import * as React from "react";
import {
  EventNameScreenMintTicket,
  EventTitleScreenMintTicket,
} from "../../Text";
import IconEvent from "../../../images/icon_event.png";

export interface IHeaderProps {}

export default function Header(props: IHeaderProps) {
  return (
    <div className="header">
      <div className="image">
        <img src={IconEvent} />
      </div>
      <div className="name">
        <EventNameScreenMintTicket>Event Name</EventNameScreenMintTicket>
        <EventTitleScreenMintTicket>Event Title</EventTitleScreenMintTicket>
      </div>
    </div>
  );
}
