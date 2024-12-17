import * as S from "./style";
import CheckBox from "../CheckBox";
import Chevron from "../../assets/chevron.svg";

function CheckList({ text, chevron, parent }) {
  return (
    <S.List role={parent}>
      <S.Wrapper>
        <CheckBox />
        <span>{text}</span>
      </S.Wrapper>
      <div>{chevron ? <img src={Chevron} alt="" /> : null}</div>
    </S.List>
  );
}

export default CheckList;
