import * as React from "react";
import styled from "styled-components";

import { Tab, Tabs } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import HomeIcon from "@material-ui/icons/Home";
import SchoolIcon from "@material-ui/icons/School";
import AssignmentIcon from "@material-ui/icons/Assignment";
import SearchIcon from "@material-ui/icons/Search";
import InfoIcon from "@material-ui/icons/Info";
import ScheduleIcon from "@material-ui/icons/Schedule";
import FindInPageIcon from "@material-ui/icons/FindInPage";
import SubjectIcon from "@material-ui/icons/Subject";
import HelpIcon from "@material-ui/icons/Help";
// import PortraitIcon from "@material-ui/icons/Portrait";

import Header from "../organisms/Header";
import Updates from "../organisms/Updates";
import PersonalGrade from "../organisms/PersonalGrade";
import Notice from "../organisms/Notice";
import ClassPortfolio from "../organisms/ClassPortfolio";

const useStyles = makeStyles({
  tabs: {
    minHeight: "20px",
    width: "200px"
  },
  tab: {
    minWidth: "50px",
    width: "79px",
    height: "70px",
    fontSize: "12px",
    color: "#000000",
    borderRadius: "10px 10px 0 0"
    // "&$selected": {
    //   backgroundColor: "#4694d1"
    // }
  },
  indicator: {
    display: "none"
  },
  selected: {
    backgroundColor: "#4694d1"
  },
  label: {
    lineHeight: "1.1"
  }
});

const HomePage = () => {
  const classes = useStyles();
  const [index, setIndex] = React.useState(0);
  const handleChange = (_, newValue) => {
    setIndex(newValue);
  };
  return (
    <Root>
      <Header />
      <TabArea>
        <Tabs
          value={index}
          onChange={handleChange}
          classes={{ indicator: classes.indicator }}
        >
          <Tab
            classes={{
              root: classes.tab,
              selected: classes.selected,
              labelIcon: classes.label
            }}
            icon={<HomeIcon />}
            label="HOME"
            disableFocusRipple
            disableRipple
          />
          <Tab
            classes={{
              root: classes.tab,
              selected: classes.selected,
              labelIcon: classes.label
            }}
            icon={<SchoolIcon />}
            label="履修"
            disableFocusRipple
            disableRipple
          />
          <Tab
            classes={{
              root: classes.tab,
              selected: classes.selected,
              labelIcon: classes.label
            }}
            label="成績・定期試験"
            icon={<AssignmentIcon />}
            disableFocusRipple
            disableRipple
          />
          <Tab
            classes={{
              root: classes.tab,
              selected: classes.selected,
              labelIcon: classes.label
            }}
            label="休・補情報"
            icon={<HelpIcon />}
            disableFocusRipple
            disableRipple
          />
          <Tab
            classes={{
              root: classes.tab,
              selected: classes.selected,
              labelIcon: classes.label
            }}
            label="シラバス"
            icon={<FindInPageIcon />}
            disableFocusRipple
            disableRipple
          />
          <Tab
            classes={{
              root: classes.tab,
              selected: classes.selected,
              labelIcon: classes.label
            }}
            label="アンケート"
            icon={<SubjectIcon />}
            disableFocusRipple
            disableRipple
          />
        </Tabs>
      </TabArea>
      <TabFooter>
        {index == 0 && (
          <>
            <InfoIcon fontSize={"small"} />
            お知らせ
          </>
        )}
        {index == 1 && (
          <>
            <ScheduleIcon fontSize={"small"} />
            履修登録
          </>
        )}
        {index == 2 && (
          <>
            <SearchIcon fontSize={"small"} />
            個人成績参照
          </>
        )}
      </TabFooter>
      <Body>
        <Updates />
        {index == 0 && <Notice />}
        {index == 1 && <ClassPortfolio />}
        {index == 2 && <PersonalGrade />}
      </Body>
    </Root>
  );
};

const Root = styled.div``;

const TabArea = styled.div`
  background-color: #a3bce2;
  height: 70px;
  padding: 2px 0 0 10px;
`;

const TabFooter = styled.div`
  display: flex;
  background-color: #4694d1;
  height: 20px;
  padding: 3px 20px;
  font-size: 12px;
`;

const Body = styled.div`
  display: flex;
  background-color: #d3def1;
  height: 100%;
  padding: 12px 20px;
`;

export default HomePage;
