import styled from "styled-components";
import * as React from "react";

import ClassIcon from "@material-ui/icons/Class";

const ClassPortfolio = () => {
  return (
    <Root>
      <ElementField>
        <ElementTitle>
          <ClassIcon fontSize={"small"} />
          <Title>授業ポートフォリオ</Title>
        </ElementTitle>
        <Notice>
          What's NEW!!
          <ul>
            <List>お知らせはありません</List>
          </ul>
        </Notice>
      </ElementField>
    </Root>
  );
};

const Root = styled.div`
  margin: 0 15px;
`;

const ElementField = styled.div`
  width: 960px;
  height: 160px;
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

const Notice = styled.div`
  margin: 20px;
  padding: 10px;
  border-top: 1px #b22222 dashed;
  border-bottom: 1px #b22222 dashed;
  width: 200px;
  font-size: 12px;
  letter-spacing: 2px;
  font-weight: bold;
`;

const WN = styled.div`
  letter-spacing: 2px;
`;

const List = styled.li`
  color: #808080;
`;

export default ClassPortfolio;
