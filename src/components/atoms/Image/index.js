import styled from "styled-components";
import * as React from "react";

const Image = ({ ...props }) => {
    return <Root {...props} />;
  };
  
  const Root = styled.img``;
  
  export default Image;
