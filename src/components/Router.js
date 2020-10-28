import * as React from "react";
import { Router } from "@reach/router";
import styled from "styled-components";

import PageFrame from "./PageFrame";
import SignInTemplate from "./templates/SignInTemplate";
import PersonalGrade from "../components/organisms/PersonalGrade";
import LatterGrade from "./organisms/LatterGrade";
import PreviousGrade from "./organisms/PreviousGrade";
import Updates from "./organisms/Updates";
import HomePage from "./pages/HomePage";

const Route = () => {
  return (
    <Root>
      <Router>
        {/* <PageFrame > */}
        <HomePage path="/" />
        <PersonalGrade path="/grade" />
        <LatterGrade path="/latter_grade" />
        <PreviousGrade path="/previous_grade" />
        <Updates path="/updates" />
        {/* </PageFrame> */}
        <SignInTemplate path="/sign_in" />
      </Router>
    </Root>
  );
};

const Root = styled.div`
  height: 100%;
`;

export default Route;
