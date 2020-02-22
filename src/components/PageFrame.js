import * as React from "react";

import Header from "./organisms/Header";

const PageFrame = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  )
};

export default PageFrame;
