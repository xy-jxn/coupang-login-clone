import styled from "styled-components";

export const List = styled.div`
  height: 20px;
  padding-bottom: 12px;
  padding-left: ${(props) => props.role ? "0" : "22px"};
  display: flex;
  justify-content: space-between;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;
