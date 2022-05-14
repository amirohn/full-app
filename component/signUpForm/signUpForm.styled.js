import styled from "styled-components";

export const FormParent = styled.div`
  width: 300px;
  padding: 1.5rem;
  ${(props) => props.theme.breakpoints.up("sm")} {
    background-color: red;
  }
`;
