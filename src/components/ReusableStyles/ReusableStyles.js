import styled from "styled-components";
import { Element } from "react-scroll";
import { Link } from "react-scroll";
import theme from "../theme";

export const AllPageMain = styled(Element)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
  left: 0;
  right: 0;
  background-color: ${(props) =>
    props.secondary
      ? theme.colors.black_blue.secondary
      : theme.colors.black_blue.primary};
  @media (max-width: 750px) {
    height: fit-content;
  }
`;

export const FullPage = styled.main`
  width: 100vw;
  height: 100%;
  display: flex;
  justify-content: center;
`;

export const FlexBox = styled.section`
  width: 95%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media (max-width: 750px) {
    flex-direction: column-reverse;
  }
`;

export const LinkButton = styled(Link)`
  font-family: ${theme.fonts.RobotoRegular};
  cursor: pointer;
  padding: 10px 20px;
  font-weight: bold;
  font-size: 0.75em;
  margin-top: 10px;
  text-transform: uppercase;
  text-decoration: none;
  width: fit-content;
  border-radius: 0;
  &:hover {
    opacity: 0.8;
  }
`;

export const TwoSidersBox = styled.div`
  justify-content: center;
  align-items: flex-start;
  display: flex;
  width: 50%;
  @media (max-width: 750px) {
    align-items: center;
    width: 100%;
    padding: 30px 0;
  }
`;

export const ArticleBox = styled(TwoSidersBox)`
  flex-direction: column;
`;

export const TextTitle = styled.h1`
  margin: 0;
  font-size: 1.6em;
  letter-spacing: 1px;
  font-family: ${theme.fonts.Nunito};
  color: ${theme.colors.white};
  padding-bottom: 10px;
`;

export const Text = styled.p`
  color: ${theme.colors.gray};
  margin: 0;
  font-size: 0.75em;
  padding: 5px 0;
  font-family: ${theme.fonts.Nunito};
  text-align: left;
  @media (max-width: 750px) {
    text-align: center;
  }
`;
