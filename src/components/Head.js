import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
const HeadBlock = styled.div`
  padding: 5px;
  border-bottom: 1px solid #3bc9db;
  h1 {
    margin: 0;
    font-size: 30px;
    color: #3bc9db;
    text-align: center;
    font-weight: bold;
  }
`;
const LogOut = styled.button`
  background: #3bc9db;
  cursor: pointer;
  width: 50px;
  height: 40px;
  left: 87.5%;
  bottom: 0px;
  font-size: 15px;
  color: white;
  border: none;
  outline: none;
  float: left;
  align-items: center;
  justify-content: center;
`;
function Head({ id, setId, pw, setPw, login }) {
  let navigate = useNavigate();
  const onClick = () => {
    localStorage.removeItem(login);
    // const getData = JSON.parse(localStorage.getItem(id));
    // getData.login = false;
    // localStorage.setItem(id, JSON.stringify(getData));
    alert("BYEBYE" + id);
    navigate("/");
  };
  return (
    <HeadBlock>
      <LogOut onClick={onClick}>로그아웃</LogOut>
      <h1>TODOLIST</h1>
    </HeadBlock>
  );
}

export default Head;
