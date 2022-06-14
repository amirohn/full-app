import styled from "styled-components";

export const PlpWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  div {
    max-width: 200px;

    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    .nonClickableArea {
      position: relative;
      min-height: 50px;
      button {
        position: absolute;
        bottom: 8px;
        left: 4px;
      }
    }
  }
`;
