import styled from "styled-components";

export const ListTicket = styled.div`
  margin: 24px 0 0;
  display: grid;
  grid-template-rows: 1fr;
  gap: 16px;
  max-height: 250px;
  overflow-y: auto;

  ::-webkit-scrollbar {
    width: 14px;
  }

  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 14px 14px transparent;
    border: solid 4px transparent;
  }

  ::-webkit-scrollbar-thumb {
    box-shadow: inset 0 0 14px 14px rgba(234, 82, 132, 0.75);
    border: solid 4px transparent;
    border-radius: 14px;
  }

  ::-webkit-scrollbar-button {
    display: none;
  }
`;
