import * as React from "react";
import styled from "styled-components";
import { Link } from "@reach/router";

const SignInForm = () => {
  return (
    <Root>
      <Label>組織アカウントを使用してサインインしてください</Label>
      <FormRow>
        <NameForm placeholder="UserName" />
        <PasswordForm placeholder="パスワード" />
        <Link to="/">
          <SignInButton>サインイン</SignInButton>
        </Link>
      </FormRow>
    </Root>
  )
}

const Root = styled.div`
  height: 100%;
  width: 100%;
  margin-left: 65%;
  padding: 3%;
`;

const Label = styled.div`
  margin: 30px 0;
  font-size: 14px;
`;

const FormRow = styled.div`
`;

const NameForm = styled.input`
  display: block;
  margin: 7px 0;
  height: 26px;
  width: 350px;
`;

const PasswordForm = styled.input`
  display: block;
  margin: 7px 0;
  height: 26px;
  width: 350px;
`;

const SignInButton = styled.button`
  margin: 40px 0;
  background-color: #0066FF;
  color: white;
  font-size: 0.9em;
  border-style: none;
  cursor: pointer;
  width: 120px;
  height: 30px;
`;

export default SignInForm;
