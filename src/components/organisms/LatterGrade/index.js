import styled from "styled-components";
import * as React from "react";
import SearchIcon from "@material-ui/icons/Search";

import { latterGrade } from "../../../data/grade";

const LatterGrade = ({}) => {
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
            ■工学部化学システム工学科 (2016年度入学 学籍番号03180807)
          </SubjectText>
        </Subject>
        <CreditInformationTable>
          <CITableBody>
            <tr>
              <CITableData>
                <CreditInformationTable>
                  <thead>
                    <TableRow>
                      <CITableHeader1>修得単位数</CITableHeader1>
                      <CITableHeader1>対象単位数</CITableHeader1>
                      <CITableHeader2>GPA</CITableHeader2>
                      <CITableHeader3>平均成績順位率</CITableHeader3>
                    </TableRow>
                  </thead>
                  <CITableBody>
                    <TableRow>
                      <CITableData>94</CITableData>
                      <CITableData>10</CITableData>
                      <CITableData>0</CITableData>
                      <CITableData>0% - 0%</CITableData>
                    </TableRow>
                  </CITableBody>
                </CreditInformationTable>
              </CITableData>
              <CITableData>
                <CreditInformationTable>
                  <thead>
                    <TableRow>
                      <CITableHeader4>年度・学期</CITableHeader4>
                      <CITableHeader4>GPA</CITableHeader4>
                      <CITableHeader3>平均成績順位率</CITableHeader3>
                      <CITableHeader1>対象単位数</CITableHeader1>
                      <CITableHeader3>計算日</CITableHeader3>
                    </TableRow>
                  </thead>
                  <CITableBody>
                    <TableRow>
                      <CITableData2 colSpan="5">
                        GPA・平均成績順位率(学期)データはありません
                      </CITableData2>
                    </TableRow>
                  </CITableBody>
                </CreditInformationTable>
              </CITableData>
            </tr>
          </CITableBody>
        </CreditInformationTable>
        <Text1>
          GPA等の対象となる授業科目の範囲については、各学部において適切に定めています。
        </Text1>
        <Text2>
          【各項目の説明〈学部後期課程科目のみの対応です。〉】
          <br></br>
          ・修得単位数とは、画面右上部に表示されている期日までに修得した全ての単位の合計数を表す。
          <br></br>
          ・対象単位数とは、GPAと平均成績順位率の算出の対象となっている科目の単位の合計数を表す。
          <br></br>
          　（不可の科目を含むが、未受験の科目は含まない）
          <br></br>
          ・GPAとは、学期、及び学部後期課程において履修した全ての対象科目の成績に対して、科目ＧＰを単位数の重み
          <br></br>
          付けをして平均値を計算した値を表す。
          <br></br>
          ・平均成績順位率とは、画面右上に表示されている期日までの全ての科目成績順位率について、単位数の
          <br></br>
          　重み付けをして平均値を計算した値。
          <br></br>
          ・科目GPとは、優上/A+を4.3、優/Aを4.0、良/Bを3.0、可/Cを2.0、不可/Dを0とした各科目のGP値。
          <br></br>
          ・科目成績順率とは、履修した全ての学生の中での順位を上限値と下限値の幅として示した数値。
          <br></br>
          ・科目GPAとは、履修した全ての学生に対して、優上/A+を4.3、優/Aを4.0、良/Bを3.0、可/Cを2.0、不可/Dを0として、
          <br></br>
          　平均値を計算した値を示す。
          <br></br>
          ・科目GP欄の「＊」印は、GPA等の対象単位数に含めない科目を表す。なお、受験者数等により、科目GPの対象と
          <br></br>
          　するか否かを判定する学部の場合、受験者等が確定後、判定を行うまでは便宜上「＊」印の表示となっている。
          <br></br>
          ・一部読替科目については、単位数が正しく表示されない場合があります。成績証明書でご確認ください。
        </Text2>
        <GradeTable>
          <thead>
            <TableRow>
              <TableHeader>No</TableHeader>
              <GTableHeader1>時間割コード</GTableHeader1>
              <GTableHeader2>開講科目名</GTableHeader2>
              <GTableHeader3>教員名</GTableHeader3>
              <GTableHeader4>履修年度</GTableHeader4>
              <GTableHeader4>学期</GTableHeader4>
              <GTableHeader4>単位数</GTableHeader4>
              <GTableHeader4>評語</GTableHeader4>
              <GTableHeader5>科目区分</GTableHeader5>
              <GTableHeader4>科目GP</GTableHeader4>
              <GTableHeader6>科目成績順位率</GTableHeader6>
              <GTableHeader4>履修者数</GTableHeader4>
              <GTableHeader4>合否</GTableHeader4>
              <td width="10" bgcolor="a3bce2"></td>
              <GTableHeader7>科目GPA</GTableHeader7>
            </TableRow>
          </thead>
          <GTableBody>
            {latterGrade.map((g, idx) => {
              return (
                <TableRow>
                  <GTableData1>{idx + 1}</GTableData1>
                  <GTableData2>{g.code}</GTableData2>
                  <GTableData2>{g.subject}</GTableData2>
                  <GTableData2>{g.professor}</GTableData2>
                  <GTableData1>{g.year}</GTableData1>
                  <GTableData1>{g.semester}</GTableData1>
                  <GTableData1>{g.credit}</GTableData1>
                  <GTableData1>{g.criticism}</GTableData1>
                  <GTableData2>{g.subjectDivision}</GTableData2>
                  <GTableData1>*</GTableData1>
                  <GTableData1></GTableData1>
                  <GTableData1>{g.nOfS}</GTableData1>
                  <GTableData1>{g.result}</GTableData1>
                  <td width="10" bgcolor="a3bce2"></td>
                  <GTableData3>*</GTableData3>
                </TableRow>
              );
            })}
          </GTableBody>
        </GradeTable>
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
  border-color: grey;
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
  border-spacing: 1px;
`;

const CITableBody = styled.tbody`
  vertical-align: middle;
`;

const CITableHeader1 = styled(TableHeader)`
  height: 25px;
  width: 70px;
`;

const CITableHeader2 = styled(TableHeader)`
  height: 25px;
  width: 40px;
`;

const CITableHeader3 = styled(TableHeader)`
  height: 25px;
  width: 100px;
`;

const CITableData = styled.td`
  height: 25px;
  text-align: center;
`;

const CITableHeader4 = styled(TableHeader)`
  height: 25px;
  width: 80px;
`;

const CITableData2 = styled.td`
  height: 25px;
`;

const Text = styled.span``;

const Text1 = styled(Text)`
  display: inline-block;
  font-size: 12px;
  margin: 10px 3px;
  color: #333;
`;

const Text2 = styled(Text)`
  display: inline-block;
  font-size: 12px;
  color: #333;
`;

const GTableBody = styled.tbody`
  vertical-align: middle;
`;

const GradeTable = styled(Table)`
  margin: 10px 0 30px 0;
  border-spacing: 1px;
`;

const GTableHeader1 = styled(TableHeader)`
  width: 60px;
`;

const GTableHeader2 = styled(TableHeader)`
  width: 150px;
`;

const GTableHeader3 = styled(TableHeader)`
  width: 80px;
`;

const GTableHeader4 = styled(TableHeader)`
  width: 50px;
`;

const GTableHeader5 = styled(TableHeader)`
  width: 200px;
`;

const GTableHeader6 = styled(TableHeader)`
  width: 100px;
`;

const GTableHeader7 = styled.th`
  width: 50px;
  font-size: 10pt;
  font-weight: bold;
  background-color: #4bacc6;
`;

const GTableData1 = styled.td`
  text-align: center;
`;

const GTableData2 = styled.td``;

const GTableData3 = styled.td`
  text-align: center;
  background-color: #c6d9f1;
`;

export default LatterGrade;
