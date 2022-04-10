// import { JSON } from "mysql/lib/protocol/constants/types";
import React, { useState } from "react";
import styled from "styled-components";

const SignUpHead = styled.div`
  padding: 5px;
  border-bottom: 1px solid #3bc9db;
  width: 250px;
  height: 40px;

  h1 {
    margin: 0;
    font-size: 30px;
    color: #3bc9db;
    text-align: center;
    font-weight: bold;
  }
`;

const SignUpContainer = styled.div`
  margin-top: 100px;
  padding: 20px;
  margin-left: 160px;
`;

const SignUpIdInput = styled.input`
  position: relative;
  overflow: hidden;
  width: 250px;
  height: 40px;
  margin: 0 0 8px;
  padding: 5px 39px 5px 11px;
  border: solid 1px #dadada;
  background: #fff;
  box-sizing: border-box;
`;

const SignUpPwInput = styled.input`
  position: relative;
  overflow: hidden;
  width: 250px;
  height: 40px;
  margin: 0 0 8px;
  display: block;
  padding: 5px 39px 5px 11px;
  border: solid 1px #dadada;
  background: #fff;
  box-sizing: border-box;
`;

const SignUpSummitBtn = styled.button`
  font-size: 18px;
  font-weight: 700;
  line-height: 49px;
  display: block;
  width: 250px;
  height: 49px;
  margin: 16px 0 7px;
  cursor: pointer;
  text-align: center;
  color: #fff;
  border: none;
  border-radius: 0;
  background-color: #03c75a;
`;

function SignUpForm({}) {
  const [userId, setUserId] = useState("");
  const [userPw, setUserPw] = useState("");
  const saveData = () => {
    const userObjectId = { id: userId };
    const userObjectPw = { pw: userPw };
    window.localStorage.setItem(
      [userId, userPw],
      JSON.stringify([userObjectId, userObjectPw])
    );
    // window.localStorage.setItem();
    console.log(localStorage);
    // window.localStorage.clear();
    console.log(window.localStorage.getItem([userId, userPw]));
  };
  const onChangeId = (e) => {
    setUserId(e.target.value);
  };
  const onChangePw = (e) => {
    setUserPw(e.target.value);
  };
  return (
    <SignUpContainer>
      <SignUpHead>
        <h1>회원가입</h1>
      </SignUpHead>
      <SignUpIdInput
        placeholder="사용할 ID를 입력하세요"
        value={userId}
        onChange={onChangeId}
      />
      <SignUpPwInput
        placeholder="사용할 PW를 입력하세요"
        type="password"
        value={userPw}
        onChange={onChangePw}
      />
      <SignUpSummitBtn onClick={saveData}>SUMMIT!</SignUpSummitBtn>
    </SignUpContainer>
  );
}

export default SignUpForm;
