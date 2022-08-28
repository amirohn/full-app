import styled from "styled-components";

export const PlpWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 24px;
  padding: 4rem 0;
  min-height: 280px;

  > div {
    max-width: 200px;

    display: flex;
    flex-direction: column;
    .nonClickableArea {
      display: flex;
      justify-content: "flex-end";
      align-items: flex-start;

      /* position: relative; */
      justify-content: stretch;
      min-height: 50px;
      button {
        /* position: absolute;
        bottom: 8px;
        left: 4px; */
      }
    }
  }
`;
