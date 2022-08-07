import styled from "styled-components";
import { StyleCustomBtnProps } from "../../Button";

export const EventNameScreenMintTicket = styled.p`
  font-weight: 900;
  font-size: 24px;
  line-height: 29px;
  color: #ffffff;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const EventTitleScreenMintTicket = styled.p`
  font-weight: 900;
  font-size: 14px;
  line-height: 17px;
  color: #ffffff;
  text-shadow: -1px 1px 0 #fff, 1px 1px 0 #fff, 1px -1px 0 #fff,
    -1px -1px 0 #fff;
  color: black;
  padding-left: 2px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const MainLabel = styled.p<Omit<StyleCustomBtnProps, "backgroundColor">>`
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  color: ${(props) => props.color};
`;

export const TicketName = styled.p<
  Omit<StyleCustomBtnProps, "backgroundColor">
>`
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  color: ${(props) => props.color};
  display: flex;
  align-items: center;
  height: 100%;
`;

export const ExistingTicket = styled.span`
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  display: inline-block;
`;

export const ExistingLabel = styled(ExistingTicket)<
  Omit<StyleCustomBtnProps, "backgroundColor">
>`
  color: ${(props) => props.color};
  opacity: 0.6;
`;

export const ExistingNumber = styled(ExistingTicket)`
  opacity: 1;
  font-weight: bold;
`;
