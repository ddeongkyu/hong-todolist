import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
const LoginHead = styled.div`
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
const LoginContainer = styled.div`
  margin-top: 100px;
  padding: 20px;
  margin-left: 160px;
`;
const IdInput = styled.input`
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
const PwInput = styled.input`
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
const LoginBtn = styled.button`
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
const SignUpBtn = styled.button`
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

function Login() {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const onChangeId = (e) => {
    setId(e.target.value);
  };
  const onChangePw = (e) => {
    setPw(e.target.value);
  };
  let navigate = useNavigate();
  function handleClick(e) {
    navigate("/SignUp");
  }
  function handleClickClick() {
    // console.log(JSON.parse(localStorage.getItem("1234")).userPw);
    // console.log(JSON.parse(localStorage.getItem("1234")));
    // // console.log(window.localStorage.getItem("id"));
    // console.log(JSON.parse(localStorage.getItem("1234")).userId);
    if (
      id === JSON.parse(localStorage.getItem(id)).userId &&
      pw === JSON.parse(localStorage.getItem(id)).userPw
    ) {
      const getData = JSON.parse(localStorage.getItem(id));
      getData.login = true;
      localStorage.setItem(id, JSON.stringify(getData));
      alert(id + "님 환영합니다.");
      navigate("/Todo");
    } else {
      alert("ID/PW확인요망");
    }
  }

  return (
    <LoginContainer>
      <LoginHead>
        <h1>로그인</h1>
      </LoginHead>
      <IdInput placeholder="Id" value={id} onChange={onChangeId} />
      <PwInput
        placeholder="Pw"
        value={pw}
        id="password"
        name="password"
        type="password"
        onChange={onChangePw}
      />
      <LoginBtn type="button" onClick={handleClickClick}>
        Login
      </LoginBtn>
      <SignUpBtn onClick={handleClick}>Sign Up</SignUpBtn>
    </LoginContainer>
  );
}

export default Login;
