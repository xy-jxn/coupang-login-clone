import styled from "styled-components";

export const Box = styled.img`
  width: 20px;
  height: 20px;
  border-radius: 20%;
  margin-right: 8px;

  ${(props) => props.check ? "border: 1px solid #556BF5" : "border: 1px solid #666"};

  ${(props) => props.check ? "background-color: #556BF5" : ""};
`;
