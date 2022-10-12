import { createGlobalStyle } from 'styled-components';

const colorViolet = '#5964e0';
const colorPurp = '#7c5dfa;';
const colorLightPurp = '#9277ff';
const colorVeryDarkBlue = '#1e2139';
const colorMidnight = '#141625';
const colorWhite = '#fff';
const colorLightGrey = '#f8f8f8';
const colorDarkGrey = '#888eb0';
const mainTransition = `all 0.3s linear`;
const lightNav = `#373b53`;
const darkNav = `#1e2139`;

export const GlobalStyle = createGlobalStyle`
*,
::before,
::after {
 margin: 0;
 padding: 0;
 box-sizing: border-box;
}

body{
 font-family: 'League Spartan', sans-serif;
 background:${({ theme }) => theme.background};
 font-size: .83rem;
 transition: ${mainTransition};
 color: ${({ theme }) => theme.regularText};
  letter-spacing: .05em;
}

h1,
h2 {
  color : ${({ theme }) => theme.color};
}

h3 {
  color: ${colorViolet};
}

input, select {
  height: 50px;
  width: 100%;
  border: ${({ theme }) => theme.inputBorder};
  background: ${({ theme }) => theme.inputBackground};;
  border-radius: 4px;
  padding-left: 1.5rem;
  font-family: 'Spartan', sans-serif;
  font-size: .9rem;
  font-weight: 700;
  color: ${({ theme }) => theme.inputColor};
  transition: ${mainTransition};

  &:hover {
    cursor: pointer;
  }
}

input[type='text'],
input[type='number'],
input[type='date'],
input[type='email'],select {
  transition: ${mainTransition};
  &:focus {
    outline: none;
    border: 1px solid #9277ff;
  }
  &:hover {
    border: 1px solid #9277ff;
  }
}
select{
  padding-left: 1rem;
  appearance: none;
}
/* input[type=number]{
  -moz-appearance: 'textfield';
}

input::-webkit-inner-spin-button,
input::-webkit-outer-spin-button{
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  margin: 0;
  display: none;
} */

label{
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

span{
margin-left: auto;
font-size: 0.7rem;
color: #ec5757;
letter-spacing: .005em;
}
}
`;

export const darkTheme = {
  background: `${colorMidnight}`,
  invoiceBackgroundColor: `${colorVeryDarkBlue}`,
  navBackground: `${darkNav}`,
  editBtnBackground: `#252945`,
  purple: `${colorPurp}`,
  color: `${colorWhite}`,
  regularText: `${colorWhite}`,
  checkbox: `${colorMidnight}`,
  backgroundColorBtn2: '#303642',
  backgroundColorBtn2Hover: '#696e76',
  editColor: '#ffffff',
  editHoverColor: '#7e88c3',
  colorBtn2: `${colorWhite}`,
  totalContainerBackground: '#0c0e16',
  inputBackground: '#1e2139',
  inputColor: '#ffffff',
  inputBorder: '1px solid #1e2139',
};

export const lightTheme = {
  background: `${colorLightGrey}`,
  navBackground: `${lightNav}`,
  invoiceBackgroundColor: `${colorWhite}`,
  editBtnBackground: `${colorLightGrey}`,
  purple: `${colorLightPurp}`,
  color: `#0c0e16`,
  regularText: `${colorDarkGrey}`,
  checkbox: '#dfe3fa',
  backgroundColorBtn2: '#eeeffc',
  backgroundColorBtn2Hover: '#c5c9f4',
  editColor: '#7e88c3',
  editHoverColor: '#7e88c3',
  colorBtn2: `${colorViolet}`,
  totalContainerBackground: `${lightNav}`,
  inputBackground: '#ffffff',
  inputColor: '#0c0e16',
  inputBorder: '1px solid #dfe3fa',
};
