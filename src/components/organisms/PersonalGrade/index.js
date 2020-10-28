import styled from "styled-components";
import * as React from "react";
import { useState } from "react";
import SearchIcon from "@material-ui/icons/Search";

import { navigate } from "@reach/router";

const PersonalGrade = () => {
  const [previousTerm, setPreviousTerm] = useState(false);
  const [latterTerm, setLatterTerm] = useState(false);

  const displayGrade = () => {
    if (previousTerm === true) {
      navigate(`/previous_grade`);
    } else if (latterTerm === true) {
      navigate(`/latter_grade`);
    }
  };

  const handleClear = () => {
    setPreviousTerm(false);
    setLatterTerm(false);
  };

  return (
    <Root>
      <ElementField>
        <ElementTitle>
          <SearchIcon fontSize={"small"} />
          <Title>個人成績参照／範囲・出力先指示</Title>
        </ElementTitle>
        <Label>
          <GLabel>表示対象とする所属を選択して下さい</GLabel>
        </Label>
        <SelectRow>
          <CheckBox
            type="checkbox"
            checked={previousTerm}
            onChange={() => setPreviousTerm(!previousTerm)}
          />
          <CLabel>
            教養学部(前期課程)理科一類 (2016年度入学 学籍番号00641028)
          </CLabel>
        </SelectRow>
        <SelectRow>
          <CheckBox
            type="checkbox"
            checked={latterTerm}
            onChange={() => setLatterTerm(!latterTerm)}
          />
          <CLabel>
            工学部化学システム工学科 (2016年度入学 学籍番号03180807)
          </CLabel>
        </SelectRow>
        <Buttons>
          <DisplayButton onClick={displayGrade}>画面に表示する</DisplayButton>
          <ClearButton onClick={handleClear}>クリア</ClearButton>
        </Buttons>
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

const Label = styled.div`
  margin: 15px 6px 10px;
`;

const GLabel = styled.div`
  display: inline;
  color: white;
  font-size: 15px;
  background-color: gray;
`;

const SelectRow = styled.div`
  display: flex;
`;

const CheckBox = styled.input`
  margin: 5px;
`;

const CLabel = styled.div`
  font-size: 12px;
  margin-top: 2px;
`;

const Buttons = styled.div`
  display: flex;
  margin-top: 10px;
`;

const DisplayButton = styled.button`
  margin-right: 10px;
  border-radius: 6px;
`;

const ClearButton = styled.button`
  border-radius: 6px;
`;

export default PersonalGrade;
