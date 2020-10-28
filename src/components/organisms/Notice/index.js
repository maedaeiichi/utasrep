import styled from "styled-components";
import * as React from "react";

import InfoIcon from "@material-ui/icons/Info";

const Notice = () => {
  return (
    <Root>
      <ElementField>
        <ElementTitle>
          <InfoIcon fontSize={"small"} />
          <Title>お知らせ</Title>
        </ElementTitle>
        <SubTitle>
          <SubTitleText>[1] 【注意】</SubTitleText>
        </SubTitle>
        <MainText>
          UTASでは、操作しない状態が30分続くと自動的にログアウトします。
          <br></br>
          保存していない作業中の情報も全て消えてしまいますのでご注意ください。
        </MainText>
        <PostScript>
          東京大学における災害時の情報発信
          <br></br>
          <a href="https://www.u-tokyo.ac.jp/ja/general/utokyo_emerg.html">
            https://www.u-tokyo.ac.jp/ja/general/utokyo_emerg.html
          </a>
          <br></br>
          Disseminating information for UTokyo during disasters
          <br></br>
          <a href="https://www.u-tokyo.ac.jp/ja/general/utokyo_emerg.html">
            https://www.u-tokyo.ac.jp/ja/general/utokyo_emerg.html
          </a>
        </PostScript>
      </ElementField>
    </Root>
  );
};

const Root = styled.div`
  margin: 0 15px;
`;

const ElementField = styled.div`
  width: 960px;
  height: 250px;
  padding: 3px 10px;
  border: 1px solid grey;
  border-radius: 15px;
  background-color: #a3bce2;
  box-shadow: 3px 3px 3px;
`;

const ElementTitle = styled.div`
  margin: auto;
  display: flex;
  padding-left: 5px;
  width: 950px;
  height: 22px;
  background-color: #4694d1;
  font-size: 11px;
  border-radius: 12px;
`;

const Title = styled.div`
  margin: auto 5px;
`;

const SubTitle = styled.div`
  border-left: 10px #9999cc solid;
  border-bottom: 1px #9999cc solid;
  padding: 2px;
  margin: 5px 0 10px 0;
`;

const SubTitleText = styled.div`
  font-size: 13px;
  padding-left: 5px;
  height: 18px;
`;

const MainText = styled.div`
  display: inline-block;
  font-weight: bold;
`;

const PostScript = styled.div`
  margin: 30px 0;
  font-size: 11px;
`;

export default Notice;
