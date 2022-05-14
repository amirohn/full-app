import styled from "styled-components";

export const FormParent = styled.div`
  width: 300px;
  height: 200px;
  padding: 1.5rem;
  background-color: red;
  ${(props) => props.theme.breakpoints.up("sm")} {
    background: red;
  }
`;

export const AppBar = styled.div`
  background-color: red;
  ${(props) => props.theme.breakpoints.up("sm")} {
    background-color: orange;
  }
  ${(props) => props.theme.breakpoints.up("md")} {
    background-color: yellow;
    color: black;
  }
  ${(props) => props.theme.breakpoints.up("lg")} {
    background-color: green;
    color: white;
  }
`;
