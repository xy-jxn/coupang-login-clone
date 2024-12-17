import * as S from "./style";
import Input from "../components/InputBox";
import Mail from "../assets/envelope.svg";
import Lock from "../assets/bag.svg";
import LockCheck from "../assets/bag-check.svg";
import Person from "../assets/person.svg";
import Phone from "../assets/phone.svg";


function Home() {
  return (
    <S.Wrapper>
      <S.Container>
        <S.Img src="https://static.coupangcdn.com/image/static/login/logo-coupang.x2.20201201.png" alt="" />
        <S.Text>회원 정보를 입력해주세요</S.Text>
        <Input icon={Mail} type="email" text="아이디(이메일)"/>
        <Input icon={Lock} type="password" text="비밀번호"/>
        <Input icon={LockCheck} type="password" text="비밀번호 확인"/>
        <Input icon={Person} type="text" text="이름"/>
        <Input icon={Phone} type="text" text="휴대폰 번호"/>
      </S.Container>
    </S.Wrapper>
  );
}

export default Home;
