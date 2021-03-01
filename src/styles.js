import { createGlobalStyle } from 'styled-components';

export const textColor = '#333333'
export const white = '#FFFFFF'
export const lightGray = '#F7F7F7'

export const tabletSize = '481px'
export const desktopSize = '769px'

export const GlobalStyle = createGlobalStyle`
  :root {
    --sk-size: 1.5rem;
    --sk-color: #FFF;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body,
  h1,
  h2,
  h3,
  p {
    margin: 0;
    padding: 0;
  }
`;
GlobalStyle.displayName = 'GlobalStyle'

export const baseFont = `
  font-size: 1rem;
  font-family: "Helvetica Neue",
    Arial,
    "Hiragino Kaku Gothic ProN",
    "Hiragino Sans",
    Meiryo,
    sans-serif;
`;

export const enFont = `
  font-family: 'Montserrat', sans-serif;
  font-weight: 300;
  font-size: 1rem;
  color: ${textColor};
`

export const jpFont = `
  font-family: 'Noto Sans JP', sans-serif;
  font-weight: 400;
  font-size: 1rem;
  color: ${textColor};
`
