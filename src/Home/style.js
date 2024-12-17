import styled from "styled-components";
import { darken } from "polished";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  `;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 4.05%;
  `;

export const Img = styled.img`
  width: 195px;
  height: 46px;
  padding-top: 47px;
  margin-bottom: 20px;
`;

export const Text = styled.div`
  width: 460px;
  padding-top: 20px;
  padding-bottom: 10px;
  font-size: 14px;
  font-weight: bold;
  line-height: 1.29;
  letter-spacing: normal;
  color: #111;
  text-align: start;
`;

export const CheckAll = styled.div`
  width: 460px;
  height: 70px;
  padding-top: 20px;
  margin: 20px 0 8px 0;
  border-top: 1px solid #EBEDF0;
`;

export const Message = styled.p`
  margin-top: 6px;
  margin-left: 26px;
  margin-bottom: 0;
  font-size: 12px;
  color: #111;
  line-height: 17px;
`;

export const CheckListBox = styled.ul`
  width: 460px;
  border: 1px solid #ccc;
  margin: 16px 0 12px;
  padding: 18px 16px 4px 16px;
  box-sizing: border-box;
`;

export const Button = styled.button`
  margin: 6.08% 0 100px 0;
  padding: 16px 17px;
  border: 0;
  width: 100%;
  color: #fff;
  background-color: #0074e9;
  &:active {
    background-color: ${ darken(0.1, '#0074e9')};
    color: ${ darken(0.1, '#fff')};
  }
  font-size: 17px;
  font-weight: bold;
  line-height: 20px;
`
