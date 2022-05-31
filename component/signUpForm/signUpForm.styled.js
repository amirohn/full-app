import styled from "styled-components";

export const FormParent = styled.div`
  margin: 0 auto;
  padding: 4rem 0;
  display: flex;
  justify-content: center;
  .formCard {
    width: calc(100vw);
    ${(props) => props.theme.breakpoints.up("md")} {
      width: 40vw !important;
    }
  }
`;
export const FormContainer = styled.div`
  padding: 2rem;
`;
export const CardChild = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
