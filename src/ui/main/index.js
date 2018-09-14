import styled, { keyframes } from "styled-components";
import { size } from "../constant";
import React from "react";
import logo from "../../assets/images/logo.svg";
import reactBg from "../../assets/images/react-bg.png";
import Slide from "@material-ui/core/Slide";

const Wrapper = styled.div`
  display: flex;
  min-width: 100vw;
  min-height: 100vh;
`;
const Screen = styled.div`
  display: flex;
  width: 800px;
  height: 600px;
  border: 1px solid green;
`;
const Paper = styled.div`
  background-color: #ffffff;
  border-radius: 3px;
`;

const PageWrapper = styled.div`
  display: flex;
  width: 100%;
  min-height: 100vh;
`;
const Block = styled.div`
  display: flex;
  justify-content: ${({ justify }) => justify || "flex-start"};
  align-items: ${({ align }) => align || "flex-start"};
  padding: ${({ padding }) => padding || 0};
  flex-direction: ${({ direction }) => direction || "row"};
  flex-grow: ${({ grow }) => grow || 1};
`;

const SectionContent = styled.div`
  display: flex;
  flex-grow: 1;
  max-width: 920px;
  flex-direction: column;
`;

const Section = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-image: url(${({ bg }) => (bg ? bg : reactBg)});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  &:before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    background-color: rgba(255, 255, 255, 0.8);
  }
`;
const PageSection = ({ direction, ...props }) => (
  <Slide direction={direction || "left"} in={true} mountOnEnter unmountOnExit>
    <Section {...props} />
  </Slide>
);
const spiner = keyframes`
from { 
  transform: rotate(0deg); 
} 
to { 
  transform: rotate(360deg); 
}
`;
const LogoImage = styled.img.attrs({
  src: logo
})`
  display: flex;
  width: ${size.header}px;
  height: ${size.header}px;
  padding: 5px;
  animation-name: ${spiner};
  animation-duration: 4000ms;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
`;

export {
  Wrapper,
  Paper,
  Screen,
  Block,
  PageWrapper,
  LogoImage,
  PageSection,
  SectionContent
};
