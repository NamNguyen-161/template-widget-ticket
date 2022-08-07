import styled from "styled-components";
import { StyleCustomBtnProps } from "../Button";
import { darken } from "../styles";

export const WrapperItemChooseTicket = styled.div`
  width: 100%;
  border-radius: 8px;
  background: #ffffff;
  padding: 16px;
  display: grid;
  grid-template-columns: 32px 1fr 92px;
  gap: 12px;
`;

export const WrapperAvatarTicket = styled.div<
  Omit<StyleCustomBtnProps, "color">
>`
  width: 100%;
  height: 32px;
  border-radius: 50%;
  background: ${(props) => props.backgroundColor};

  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
`;

export const WrapperInfoTicket = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  gap: 4px;
`;

export const ButtonCountTicket = styled.div<Omit<StyleCustomBtnProps, "color">>`
  width: 100%;
  height: 32px;
  padding: 4px;
  border-radius: 100px;
  background: ${(props) => props.backgroundColor};
  display: grid;
  grid-template-columns: 24px 1fr 24px;
  gap: 5px;
  text-align: center;
`;

export const NumberTicket = styled.div<
  Omit<StyleCustomBtnProps, "backgroundColor">
>`
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  color: ${(props) => props.color};
`;

export const CircleButton = styled(NumberTicket)<StyleCustomBtnProps>`
  color: ${(props) => props.color};
  background: ${(props) => props.backgroundColor};
  width: 100%;
  height: 24px;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.2s easy;
  user-select: none;

  &:hover {
    ${darken(0.05)}
  }
`;
