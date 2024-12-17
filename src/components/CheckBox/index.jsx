import * as S from "./style";
import React, { useState } from "react";
import Check from "../../assets/check.svg";

function CheckBox() {
  const [check, setCheck] = useState(false);
  
  const handleChack = () => {
    setCheck(!check);
    console.log(check);
  };

  return <S.Box src={Check} onClick={handleChack} check={check} />;
}

export default CheckBox;