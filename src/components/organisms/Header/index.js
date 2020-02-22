import * as React from "react";
import styled from "styled-components";
// import { Link } from "@reach/router";

const Header = () => {
  return (
    <Root>
      <Links>
        <Link>スマホ版</Link>
        <Link>English</Link>
        <Link>残り30分</Link>
        <Link>ログアウト</Link>
      </Links>
    </Root>
  );
};

const Root = styled.header`
  display: flex;
  box-sizing: border-box;
  align-items: center;
  padding: 5px 20px;
  height: 75px;
  width: 100%;
  background-color: #d9e5ff;
`;

const Links = styled.div`
  display: flex;
  margin: auto;
`;

const Link = styled.div`
`;

export default Header;
