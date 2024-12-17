import * as S from "./style";

function InputBox({ icon, type, text }) {
  return (
    <S.Wrapper>
      <S.Icon>
        <S.Img src={icon} alt="" />
      </S.Icon>
      <S.Input type={type} placeholder={text} />
    </S.Wrapper>
  );
}

export default InputBox;
