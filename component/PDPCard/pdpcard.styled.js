import styled from "styled-components";

export const PdpWapper = styled.div`
  display: flex;
  gap: 1rem;
  > div {
    width: 50%;
  }
  .whiteBox {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .addToBagButton {
    width: 100%;
    display: flex;
    gap: 0.5rem;
    > button {
      flex: 20;
    }
    > div {
      flex: 1;
      padding: calc(1rem - 1px);
      border: 1px solid;
      border-radius: 5px;
      text-align: center;
    }
  }
`;
