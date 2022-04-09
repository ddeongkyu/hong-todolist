import React, { useState } from "react";
import styled from "styled-components";

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
  ${({ disabled }) =>
    disabled &&
    `
  background-color: #efefef;
`}
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
  return (
    <LoginContainer>
      <LoginHead>
        <h1>로그인</h1>
      </LoginHead>
      <IdInput placeholder="Id" id="id" name="id" />
      <PwInput placeholder="Pw" id="password" name="password" type="password" />
      <LoginBtn type="button">Login</LoginBtn>
      <SignUpBtn>Sign Up</SignUpBtn>
    </LoginContainer>
  );
}

export default Login;
