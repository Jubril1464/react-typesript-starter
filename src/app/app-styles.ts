import styled from "styled-components";
import { StyleProps } from "../model/index";

export const Container = styled.div<StyleProps>`
  width: 100%;
  height: 100%;
  margin-left:${({ leftMargin }) => leftMargin || 2}rem
   background-color: #fff;
    position: relative;

    @media (max-width: 750px) {
        margin-left: 0;
    }
`;
export const InfoSideBar = styled.div<StyleProps>`
  width: 25rem;
  height: 100%;
  position: fixed;
  top: 5.5rem;
  left: 0;
  background-color: #f4e9d9;

  @media (max-width: 750px) {
    display: none;
  }
`;

export const InfoWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 4rem 5rem;
`;
export const SubContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 4rem 4rem 3rem 4rem;

  @media (max-width: 360px) {
    padding: 4rem 3rem 3rem 3rem;
  }
`;
export const ScreenContainer = styled.div<StyleProps>`
  width: 100%;
  height: 100%;
  position: relative;
  padding: ${({ padding }) => padding || 2}rem;
`;
export const SidePopupContainer = styled.div<StyleProps>`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  transition: all 0.2s;
  z-index: ${({ zIndex }) => zIndex || 7};
`;

export const CenterPopup = styled.div<StyleProps>`
  background: ${({ bgColor }) => bgColor || "#081952"};
  min-height: 60rem;
  width: 87rem;
  border-radius: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8rem 2rem 2rem 2rem;
  position: relative;

  @media (max-width: 800px) {
    width: 90%;
  }
  @media (max-width: 530px) {
    min-height: 55rem;
  }
`;
export const Form = styled.form<StyleProps>`
  width: 100%;
  margin-top: ${({ topMargin }) => topMargin || 0}rem;
  margin-bottom: ${({ bottomMargin }) => bottomMargin || 0}rem;
`;

export const FormGroup = styled.div<StyleProps>`
  width: ${({ width }) => width || 100}%;
  margin-right: ${({ rightMargin }) => rightMargin || 0}%;
  margin-top: ${({ topMargin }) => topMargin || 0}rem;
  margin-bottom: ${({ bottomMargin }) => bottomMargin || 3}rem;

  label {
    margin: 0;
    padding-bottom: 0.8rem;
    font-weight: 500;
    display: ${({ display }) => display || "inline-block"};
  }
  input,
  select,
  textarea,
  #react_select {
    border: ${({ borderType }) => borderType || "1px solid #fff"};
    border-radius: 0.8rem;
    background-color: transparent;
    padding: 0 1.5rem;
    color: #fff;
    outline: none;
    height: 5rem;
    width: 100%;
    &:focus {
      outline: none;
    }
  }
  textarea {
    height: 17rem;
    padding: 1rem 1.5rem;
  }
  input::-webkit-calendar-picker-indicator {
    filter: invert(1);
  }
`;
export const FlexEndWrapper = styled.div<StyleProps>`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  margin-top: ${({ topMargin }) => topMargin || 0}rem;
  margin-bottom: ${({ bottomMargin }) => bottomMargin || 0}rem;
`;

export const Button = styled.button<StyleProps>`
  width: ${({ width }) => width || 15}rem;
  height: ${({ height }) => height || 4.5}rem;
  background: ${({ bgColor }) => bgColor || "#6DE7B4"};
  border-radius: ${({ radius }) => radius || "0.8"}rem;
  outline: none;
  border: none;
  border: ${({ borderColor }) =>
    borderColor ? `1px solid ${borderColor}` : "none"};
  transition: all 0.2s;
  font-size: ${({ titleSize }) => titleSize || 1.5}rem;
  color: ${({ color }) => color || "#00071F"};
  font-weight: ${({ fontWeight }) => fontWeight || 700};
  margin-right: ${({ rightMargin }) => rightMargin || 0}rem;
  margin-left: ${({ leftMargin }) => leftMargin || 0}rem;
  margin-top: ${({ topMargin }) => topMargin || "0"}rem;
  margin-bottom: ${({ bottomMargin }) => bottomMargin || "0"}rem;
  padding: 0 ${({ padding }) => padding || 0}rem;
  padding-top: ${({ topPadding }) => topPadding || 0}rem;
  padding-bottom: ${({ bottomPadding }) => bottomPadding || 0}rem;
  padding-left: ${({ leftPadding, padding }) =>
    leftPadding ? leftPadding : padding ? padding : 0}rem;
  padding-right: ${({ rightPadding, padding }) =>
    rightPadding ? rightPadding : padding ? padding : 0}rem;
  box-shadow: ${({ shadow }) => shadow || "0px 1px 2px rgba(16, 24, 40, 0.05)"};

  &:hover,
  &:focus {
    background: ${({ hoverBgColor, bgColor }) => hoverBgColor || bgColor};
    color: ${({ hoverColor, color }) =>
      hoverColor ? hoverColor : color ? color : "#00071F"};
    outline: none;
  }
`;
export const OutlineButton = styled.button<StyleProps>`
  width: ${({ width, sizeUnit }) =>
    sizeUnit && width
      ? `${width}${sizeUnit}`
      : width
      ? `${width}rem`
      : "20rem"};
  height: ${({ height }) => height || 4.5}rem;
  border: 1px solid ${({ color }) => color || "#6DE7B4"};
  border-radius: ${({ radius }) => radius || 0.8}rem;
  outline: none;
  background: transparent;
  transition: all 0.2s;
  font-size: ${({ titleSize }) => titleSize || 1.5}rem;
  color: ${({ color }) => color || "#00071F"};
  font-weight: ${({ fontWeight }) => fontWeight || 700};
  margin-right: ${({ rightMargin }) => rightMargin || 0}rem;
  margin-left: ${({ leftMargin }) => leftMargin || 0}rem;
  margin-top: ${({ topMargin }) => topMargin || "0"}rem;
  margin-bottom: ${({ bottomMargin }) => bottomMargin || "0"}rem;
  padding: 0 ${({ padding }) => padding || 0}rem;
  padding-top: ${({ topPadding }) => topPadding || 0}rem;
  padding-bottom: ${({ bottomPadding }) => bottomPadding || 0}rem;
  padding-left: ${({ leftPadding, padding }) =>
    leftPadding ? leftPadding : padding ? padding : 0}rem;
  padding-right: ${({ rightPadding, padding }) =>
    rightPadding ? rightPadding : padding ? padding : 0}rem;

  &:hover,
  &:focus {
    background: ${({ hoverBgColor, color }) => hoverBgColor || color};
    color: ${({ hoverColor }) => hoverColor || "#00071F"};
    border: none;
    outline: none;
  }
`;
export const Divider = styled.div<StyleProps>`
  width: 100%;
  margin-top: ${({ topMargin }) => topMargin || 3}rem;
  margin-bottom: ${({ bottomMargin }) => bottomMargin || 3}rem;
  border: 1px solid ${({ bgColor }) => bgColor || "rgba(255, 255, 255, 0.07)"};
`;
export const CustomContainer = styled.div<StyleProps>`
  width: ${({ width, sizeUnit }) =>
    sizeUnit && width ? `${width}${sizeUnit}` : width ? `${width}rem` : "100%"};
  height: ${({ height }) => `${height}rem` || "auto"};
  margin-top: ${({ topMargin }) => topMargin || 0}rem;
  margin-bottom: ${({ bottomMargin }) => bottomMargin}rem;
  margin-left: ${({ leftMargin }) => leftMargin || 0}rem;
  margin-right: ${({ rightMargin }) => rightMargin || 0}rem;
  padding-top: ${({ topPadding }) => topPadding || 0}rem;
  padding-bottom: ${({ bottomPadding }) => bottomPadding || 0}rem;
  padding-left: ${({ leftPadding }) => leftPadding || 0}rem;
  padding-right: ${({ rightPadding }) => rightPadding || 0}rem;
  background-color: ${({ bgColor }) => bgColor || "transparent"};
  border-radius: ${({ radius }) => radius || 0}rem;
  border: ${({ borderColor }) =>
    borderColor ? `1px solid ${borderColor}` : "none"};
  overflow: hidden;
  position: relative;
`;
export const FlexColumn = styled.div<StyleProps>`
  display: flex;
  flex-direction: column;
  gap: ${({ gap }) => `${gap}rem` || "0"};
  height: ${({ height }) => `${height}rem` || "auto"};
  justify-content: ${({ justifyContent }) => justifyContent || "center"};
  align-items: ${({ alignItems }) => alignItems || "center"};
  width: ${({ width }) => width || 100}%;
  margin-top: ${({ topMargin }) => topMargin || 0}rem;
  margin-bottom: ${({ bottomMargin }) => bottomMargin}rem;
  margin-left: ${({ leftMargin }) => leftMargin || 0}rem;
  margin-right: ${({ rightMargin }) => rightMargin || 0}rem;
  padding-top: ${({ topPadding }) => topPadding || 0}rem;
  padding-bottom: ${({ bottomPadding }) => bottomPadding || 0}rem;
  padding-left: ${({ leftPadding }) => leftPadding || 0}rem;
  padding-right: ${({ rightPadding }) => rightPadding || 0}rem;
  background-color: ${({ bgColor }) => bgColor || "transparent"};
  border-radius: ${({ radius }) => radius || 0}rem;
  border: ${({ borderColor }) =>
    borderColor ? `1px solid ${borderColor}` : "none"};
  position: relative;
`;
export const FlexRow = styled.div<StyleProps>`
  display: flex;
  flex-direction: row;
  gap: ${({ gap }) => `${gap}rem` || "0"};
  height: ${({ height }) => `${height}rem` || "auto"};
  justify-content: ${({ justifyContent }) => justifyContent || "center"};
  align-items: ${({ alignItems }) => alignItems || "center"};
  flex-wrap: ${({ wrap }) => wrap || "nowrap"};
  width: ${({ width, sizeUnit }) =>
    sizeUnit && width ? `${width}${sizeUnit}` : width ? `${width}rem` : "100%"};
  margin-top: ${({ topMargin }) => topMargin || 0}rem;
  margin-bottom: ${({ bottomMargin }) => bottomMargin}rem;
  margin-left: ${({ leftMargin }) => leftMargin || 0}rem;
  margin-right: ${({ rightMargin }) => rightMargin || 0}rem;
  padding-top: ${({ topPadding }) => topPadding || 0}rem;
  padding-bottom: ${({ bottomPadding }) => bottomPadding || 0}rem;
  padding-left: ${({ leftPadding }) => leftPadding || 0}rem;
  padding-right: ${({ rightPadding }) => rightPadding || 0}rem;
  background-color: ${({ bgColor }) => bgColor || "transparent"};
  border-radius: ${({ radius }) => radius || 0}rem;
  border: 1px solid ${({ borderColor }) => borderColor || "transparent"};
  position: relative;
  cursor: pointer;
`;

export const AppText = styled.p<StyleProps>`
  font-size: ${({ textSize }) => textSize || 1.5}rem;
  width: ${({ width, sizeUnit }) =>
    sizeUnit && width ? `${width}${sizeUnit}` : width ? `${width}rem` : "auto"};
  color: ${({ color }) => color || "#fff"};
  font-weight: ${({ fontWeight }) => fontWeight || 700};
  margin-top: ${({ topMargin }) => topMargin || 0}rem;
  margin-bottom: ${({ bottomMargin }) => bottomMargin || 0}rem;
  margin-left: ${({ leftMargin }) => leftMargin || 0}rem;
  margin-right: ${({ rightMargin }) => rightMargin || 0}rem;
  padding-top: ${({ topPadding }) => topPadding || 0}rem;
  padding-bottom: ${({ bottomPadding }) => bottomPadding || 0}rem;
  padding-left: ${({ leftPadding }) => leftPadding || 0}rem;
  padding-right: ${({ rightPadding }) => rightPadding || 0}rem;
  text-align: ${({ align }) => align || "left"};
  cursor: ${({ cursor }) => cursor || "auto"};
`;
export const AppSpan = styled.span<StyleProps>`
  width: ${({ width, sizeUnit }) =>
    sizeUnit && width ? `${width}${sizeUnit}` : width ? `${width}rem` : "auto"};
  font-size: ${({ textSize }) => textSize || 1.5}rem;
  color: ${({ color }) => color || "#fff"};
  font-weight: ${({ fontWeight }) => fontWeight || 700};
  margin-top: ${({ topMargin }) => topMargin || 0}rem;
  margin-bottom: ${({ bottomMargin }) => bottomMargin}rem;
  margin-left: ${({ leftMargin }) => leftMargin || 0}rem;
  margin-right: ${({ rightMargin }) => rightMargin || 0}rem;
  padding-top: ${({ topPadding }) => topPadding || 0}rem;
  padding-bottom: ${({ bottomPadding }) => bottomPadding || 0}rem;
  padding-left: ${({ leftPadding }) => leftPadding || 0}rem;
  padding-right: ${({ rightPadding }) => rightPadding || 0}rem;
  text-align: ${({ align }) => align || "left"};
  cursor: ${({ cursor }) => cursor || "auto"};
  display:inline-block
`;
export const ScreenTitle = styled.h4<StyleProps>`
  width: ${({ width, sizeUnit }) =>
    sizeUnit && width ? `${width}${sizeUnit}` : width ? `${width}rem` : "auto"};
  font-size: ${({ textSize }) => textSize || 1.5}rem;
  color: ${({ color }) => color || "#fff"};
  font-weight: ${({ fontWeight }) => fontWeight || 700};
  margin-top: ${({ topMargin }) => topMargin || 0}rem;
  margin-bottom: ${({ bottomMargin }) => bottomMargin}rem;
  margin-left: ${({ leftMargin }) => leftMargin || 0}rem;
  margin-right: ${({ rightMargin }) => rightMargin || 0}rem;
  padding-top: ${({ topPadding }) => topPadding || 0}rem;
  padding-bottom: ${({ bottomPadding }) => bottomPadding || 0}rem;
  padding-left: ${({ leftPadding }) => leftPadding || 0}rem;
  padding-right: ${({ rightPadding }) => rightPadding || 0}rem;
  text-align: ${({ align }) => align || "left"};
`;

export const AppLink = styled.a<StyleProps>`
  color: ${({ color }) => color || "#000"};
  text-decoration: ${({ decoration }) => decoration || "underline"};
  font-size: ${({ textSize }) => textSize || 1.5}rem;
  font-weight: ${({ fontWeight }) => fontWeight || 700};
  margin-top: ${({ topMargin }) => topMargin || 0}rem;
  margin-bottom: ${({ bottomMargin }) => bottomMargin || 0}rem;
  margin-left: ${({ leftMargin }) => leftMargin || 0}rem;
  margin-right: ${({ rightMargin }) => rightMargin || 0}rem;
  padding-top: ${({ topPadding }) => topPadding || 0}rem;
  padding-bottom: ${({ bottomPadding }) => bottomPadding || 0}rem;
  padding-left: ${({ leftPadding }) => leftPadding || 0}rem;
  padding-right: ${({ rightPadding }) => rightPadding || 0}rem;
  text-align: ${({ align }) => align || "left"};
  border-bottom: ${({ hasBottomBorder, color }) =>
    hasBottomBorder ? `1px solid ${color || "#000"}` : "none"};
  outline: none;
  cursor: pointer;
  transition: all 0.2s;

  &:hover,
  &:visited {
    outline: none;
  }

  &:hover {
    color: ${({ color, hoverColor }) => hoverColor || color};
    border-bottom: ${({ hasBottomBorder, hoverColor, color }) =>
      hasBottomBorder ? `1px solid ${hoverColor || color}` : "none"};
    text-decoration: ${({ decoration }) => decoration || "underline"};
    outline: none;
  }
`;
export const ImageWrapper = styled.div<StyleProps>`
 width:${({ width }) => width || 30}rem;
 height:${({ height }) => height || 30}rem;
 
 img {
    width:100%
    height:100%
    border-radius: ${({radius}) => radius || 'none'}
 }
`
export const RoundImageContainer = styled.div<StyleProps>`
  width: ${({ size }) => size || 2}rem;
  height: ${({ size }) => size || 2}rem;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${({ bgColor }) => bgColor || "transparent"};
  border: 1px solid ${({ borderColor }) => borderColor || "transparent"};
  margin-top: ${({ topMargin }) => topMargin || 0}rem;
  margin-bottom: ${({ bottomMargin }) => bottomMargin}rem;
  margin-left: ${({ leftMargin }) => leftMargin || 0}rem;
  margin-right: ${({ rightMargin }) => rightMargin || 0}rem;
  position: relative;

  img {
    min-width: ${({ isMaxWidth }) => (isMaxWidth ? "100%" : "auto")};
    max-width: ${({ isMaxWidth }) => (isMaxWidth ? "100%" : "auto")};
  }
`;

export const AbsoluteContainer = styled.div<StyleProps>`
  position: absolute;
  top: ${({ top }) => top || "none"}rem;
  right: ${({ right }) => right || "none"}rem;
  left: ${({ left }) => left || "none"}rem;
  bottom: ${({ bottom }) => bottom || "none"}rem;
  background: ${({ bgColor }) => bgColor || "transparent"};
  width: ${({ width, sizeUnit }) =>
    sizeUnit && width ? `${width}${sizeUnit}` : width ? `${width}rem` : "auto"};
  height: ${({ height }) =>
    height === "full" ? "100%" : height ? `${height}rem` : "auto"};
  border-radius: ${({ radius }) => radius || 0}rem;
  z-index: ${({ zIndex }) => zIndex || 1};
  transition: all 0.2s;
`;
export const FixedContainer = styled.div<StyleProps>`
  position: fixed;
  top: ${({ top }) => top || "none"}rem;
  right: ${({ right }) => right || "none"}rem;
  left: ${({ left }) => left || "none"}rem;
  bottom: ${({ bottom }) => bottom || "none"}rem;
  background: ${({ bgColor }) => bgColor || "transparent"};
  width: ${({ width, sizeUnit }) =>
    sizeUnit && width ? `${width}${sizeUnit}` : width ? `${width}rem` : "auto"};
  height: ${({ height }) =>
    height === "full" ? "100%" : height ? `${height}rem` : "auto"};
  border-radius: ${({ radius }) => radius || 0}rem;
  padding-top: ${({ topPadding }) => topPadding || 0}rem;
  padding-bottom: ${({ bottomPadding }) => bottomPadding || 0}rem;
  padding-left: ${({ leftPadding }) => leftPadding || 0}rem;
  padding-right: ${({ rightPadding }) => rightPadding || 0}rem;
`;