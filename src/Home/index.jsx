import * as S from "./style";
import Input from "../components/InputBox";
import CheckBox from "../components/CheckBox";
import CheckList from "../components/CheckList";
import Mail from "../assets/envelope.svg";
import Lock from "../assets/bag.svg";
import LockCheck from "../assets/bag-check.svg";
import Person from "../assets/person.svg";
import Phone from "../assets/phone.svg";

function Home() {
  return (
    <S.Wrapper>
      <S.Container>
        <S.Img
          src="https://static.coupangcdn.com/image/static/login/logo-coupang.x2.20201201.png"
          alt=""
        />
        <S.Text>회원정보를 입력해주세요</S.Text>
        <Input icon={Mail} type="email" text="아이디(이메일)" />
        <Input icon={Lock} type="password" text="비밀번호" />
        <Input icon={LockCheck} type="password" text="비밀번호 확인" />
        <Input icon={Person} type="text" text="이름" />
        <Input icon={Phone} type="text" text="휴대폰 번호" />
        <S.CheckAll>
          <div style={{ height: "20px", display: "flex" }}>
            <CheckBox />
            <span style={{ fontSize: "17px", fontWeight: "bold" }}>
              모두 확인하였으며 동의합니다.
            </span>
          </div>
          <S.Message>
            전체 동의에는 필수 및 선택 정보에 대한 동의가 포함되어 있으며,
            개별적으로 동의를 선택 하실 수 있습니다. 선택 항목에 대한 동의를
            거부하시는 경우에도 서비스 이용이 가능합니다.
          </S.Message>
        </S.CheckAll>
        <S.CheckListBox>
          <CheckList text="[필수] 만 14세 이상입니다" chevron={false} parent={true}/>
          <CheckList text="[필수] 쿠팡 이용약관 동의" chevron={true} parent={true}/>
          <CheckList text="[필수] 전자금융거래 이용약관 동의" chevron={true} parent={true}/>
          <CheckList text="[필수] 개인정보 수집 및 이용 동의" chevron={true} parent={true}/>
          <CheckList text="[필수] 개인정보 제3자 제공 동의" chevron={true} parent={true}/>
          <CheckList text="[선택] 마케팅 목적의 개인정보 수집 및 이용 동의" chevron={true} parent={true}/>
          <CheckList text="[선택] 광고성 정보 수신 동의" chevron={true} parent={true}/>
          <CheckList text="[선택] 이메일 수신 동의" chevron={false} parent={false}/>
          <CheckList text="[선택] SMS, SNS 수신 동의" chevron={false} parent={false}/>
          <CheckList text="[선택] 앱 푸시 수신 동의" chevron={false} parent={false}/>
        </S.CheckListBox>
        <S.Button type="button">동의하고 가입하기</S.Button>
      </S.Container>
    </S.Wrapper>
  );
}

export default Home;
