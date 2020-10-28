import * as React from "react";
import styled from "styled-components";
// import { Link } from "@reach/router";

const Header = () => {
  return (
    <Root>
      <img src="./images/utas2.png" width="235" height="75" />
      <Image src="./images/utas3.png" width="338" height="45" />
      {/* <Links>
        <Link>スマホ版</Link>
        <Link>English</Link>
        <Link>残り30分</Link>
        <Link>ログアウト</Link>
      </Links> */}
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
  background-color: #d3def1;
`;

const Image = styled.img`
  margin-left: 200px;
  margin-top: 0px;
`;

// const Links = styled.div`
//   display: flex;
//   margin: auto;
// `;

// const Link = styled.div``;

export default Header;
