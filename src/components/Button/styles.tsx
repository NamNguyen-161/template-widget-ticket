import React from "react";
import styled from "styled-components";
import { darken } from "../styles/styles";

export interface StyleCustomBtnProps {
  backgroundColor: string;
  color: string;
}
export const CustomButton = styled.button<StyleCustomBtnProps>`
  width: 100%;
  padding: 17px;
  background: ${(props) => `${props.backgroundColor}`};
  border-radius: 24px;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  text-align: center;
  color: ${(props) => `${props.color}`};
  cursor: pointer;
  border: none;
  transition: all 0.2s;

  &:disabled {
    ${darken(0.5)}
    &:hover {
      ${darken(0.5)}
    }
  }

  &:hover {
    ${darken(0.1)}
  }
`;
