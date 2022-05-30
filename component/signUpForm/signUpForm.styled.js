import styled from "styled-components";

export const FormParent = styled.div`
  margin: 4rem auto;
  display: flex;
  justify-content: center;
  .formCard {
    width: calc(100vw);
    ${(props) => props.theme.breakpoints.up("md")} {
      width: 60vw;
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

// export const AppBar = styled.div`
//   ${(props) => props.theme.breakpoints.up("sm")} {
//     background-color: orange;
//   }
//   ${(props) => props.theme.breakpoints.up("md")} {
//     background-color: yellow;
//     color: black;
//   }
//   ${(props) => props.theme.breakpoints.up("lg")} {
//     background-color: green;
//     color: white;
//   }
// `;
