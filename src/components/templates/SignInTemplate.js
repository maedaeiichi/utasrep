import * as React from "react";
import styled from "styled-components";

import SignInForm from "../organisms/SignInForm";

const SignInTemplate = () => {
  return (
    <Root>
      <Image src="./images/utas1.png" alt="utas1" />
      <StSignInForm />
    </Root>
  );
};

const Root = styled.div`
  display: flex;
`;

const Image = styled.img`
  width: 60%;
`;

const StSignInForm = styled(SignInForm)`
  width: 40%;
`;

export default SignInTemplate;
