import * as React from "react";
import styled from "styled-components";

const Updates = () => {
  return (
    <Root>
      <ElementField>
        <ElementTitle>
          <Title>新着情報</Title>
        </ElementTitle>
        <Text>あなた宛の新着情報があります。</Text>
        <MessageLink>新着の掲示があります。</MessageLink>
        <MessageLink>アンケートが登録されました。</MessageLink>
        <MessageLink>休講補教室変更が登録されました。</MessageLink>
        <MessageLink>進路状況調査が登録されました。</MessageLink>
        <MessageLink>アンケートの回答を行ってください。</MessageLink>
        <MessageLink>休講補教室変更が取り消されました。</MessageLink>
      </ElementField>
    </Root>
  );
};

const Root = styled.div``;

const ElementField = styled.div`
  width: 200px;
  padding: 3px 5px;
  border: 1px solid grey;
  border-radius: 10px;
  background-color: #a3bce2;
  box-shadow: 3px 3px 3px;
`;

const ElementTitle = styled.div`
  margin: auto;
  display: flex;
  padding-left: 5px;
  width: 198px;
  height: 22px;
  background-color: #4694d1;
  font-size: 12px;
  border-radius: 12px;
`;

const Title = styled.div`
  margin: auto 5px;
`;

const Text = styled.span`
  display: inline-block;
  margin: 3px 0 0 10px;
  font-size: 12px;
`;

const MessageLink = styled.span`
  display: inline-block;
  color: blue;
  font-size: 12px;
  margin: 0 5px;
`;

export default Updates;
