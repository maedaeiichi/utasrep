import styled from "styled-components";
import * as React from "react";
import SearchIcon from "@material-ui/icons/Search";

import { previousGrade } from "../../../data/grade";

const PreviousGrade = () => {
  return (
    <Root>
      <ElementField>
        <ElementTitle>
          <SearchIcon />
          <Title>個人成績参照</Title>
        </ElementTitle>
        <StudentInformationTable>
          <SITableBody>
            <TableRow>
              <SITableHeader>学生氏名</SITableHeader>
              <SITableData>前田　叡一</SITableData>
              <SITableHeader>学籍番号</SITableHeader>
              <_SITableData>03180807</_SITableData>
            </TableRow>
            <TableRow>
              <SITableHeader>学生所属</SITableHeader>
              <SITableData>化学システム工学科</SITableData>
              <SITableHeader>学年</SITableHeader>
              <_SITableData>4年</_SITableData>
            </TableRow>
          </SITableBody>
        </StudentInformationTable>
        <Subject>
          <SubjectText>
            ■教養学部(前期課程)理科一類 (2016年度入学 学籍番号00641028)
          </SubjectText>
        </Subject>
        <CreditInformationTable>
          <CTHead>
            <TableRow>
              <CITableHeader1>No.</CITableHeader1>
              <CITableHeader2>時間割コード</CITableHeader2>
              <CITableHeader3>科目</CITableHeader3>
              <CITableHeader4>教員名</CITableHeader4>
              <CITableHeader2>履修年度</CITableHeader2>
              <CITableHeader2>学期</CITableHeader2>
              <CITableHeader2>単位数</CITableHeader2>
              <CITableHeader5>評語</CITableHeader5>
              <CITableHeader5>合否</CITableHeader5>
            </TableRow>
          </CTHead>
          <CITableBody>
            {previousGrade.map((g, idx) => {
              return (
                <TableRow>
                  <CITableData1>{idx + 1}</CITableData1>
                  <CITableData2>{g.code}</CITableData2>
                  <CITableData2>{g.subject}</CITableData2>
                  <CITableData2>{g.professor}</CITableData2>
                  <CITableData1>{g.year}</CITableData1>
                  <CITableData1>{g.semester}</CITableData1>
                  <CITableData1>{g.credit}</CITableData1>
                  <CITableData1>{g.criticism}</CITableData1>
                  <CITableData1>{g.result}</CITableData1>
                </TableRow>
              );
            })}
          </CITableBody>
        </CreditInformationTable>
      </ElementField>
    </Root>
  );
};

const Root = styled.div`
  background-color: #d3def1;
`;

const ElementField = styled.div`
  width: 1050px;
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
  width: 1040px;
  height: 22px;
  background-color: #4694d1;
  font-size: 12px;
  border-radius: 12px;
`;

const Title = styled.div`
  margin: auto 5px;
`;

const Table = styled.table`
  color: #333;
  font-size: 12px;
  border-color: white;
`;

const StudentInformationTable = styled(Table)`
  margin: 30px 0;
  border-spacing: 1px;
`;

const SITableBody = styled.tbody`
  vertical-align: middle;
`;

const TableRow = styled.tr`
  background-color: #dddddd;
`;

const TableHeader = styled.th`
  background-color: #99cc33;
  font-size: 10pt;
  font-weight: normal;
`;

const SITableHeader = styled(TableHeader)`
  height: 25px;
  width: 100px;
`;

const SITableData = styled.td`
  width: 360px;
`;

const _SITableData = styled.td`
  width: 100px;
`;

const Subject = styled.div`
  margin: 10px 5px;
`;

const SubjectText = styled.span`
  font-weight: bold;
  font-size: 12px;
`;

const CreditInformationTable = styled(Table)`
  margin: 10px 0 30px 0;
  border-spacing: 1px;
`;

const CITableBody = styled.tbody`
  vertical-align: middle;
`;

const CTHead = styled.thead`
  vertical-align: middle;
`;

const CITableHeader1 = styled(TableHeader)`
  height: 25px;
  width: 40px;
`;

const CITableHeader2 = styled(TableHeader)`
  height: 25px;
  width: 100px;
`;

const CITableHeader3 = styled(TableHeader)`
  height: 25px;
  width: 200px;
`;

const CITableHeader4 = styled(TableHeader)`
  height: 25px;
  width: 150px;
`;

const CITableHeader5 = styled(TableHeader)`
  height: 25px;
  width: 60px;
`;

const CITableData1 = styled.td`
  height: 25px;
  text-align: center;
`;

const CITableData2 = styled.td`
  height: 25px;
`;

export default PreviousGrade;
