import React from "react";
import styled from "styled-components";
import { MdDelete } from "react-icons/md";

const Remove = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #d2ee2e6;
`;
const Text = styled.div`
  flex: 1;
  font-size: 21px;
  color: #495057;
`;
const ItemBlock = styled.div`
  display: flex;
  align-items: center;
  padding-top: 12px;
  padding-bottom: 12px;
`;

function Item({ id, text }) {
  const onRemove = () => {};
  return <Text>zzz</Text>;
}

export default Item;
