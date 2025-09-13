import { CssBaseline as MaterialUI_CssBaseline } from '@mui/material';
import { Html, Head, Main, NextScript } from 'next/document';

// https://mui.com/material-ui/getting-started/installation/#google-web-fonts
function MaterialUI_RobotoFont() {
    return (
        <>
            <link
                rel="preconnect"
                href="https://fonts.googleapis.com"
            />
            <link
                rel="preconnect"
                href="https://fonts.gstatic.com"
                crossOrigin="anonymous"
            />
            <link
                rel="stylesheet"
                href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;600;700&display=swap"
            />
        </>
    )
}

// https://mui.com/material-ui/getting-started/installation/#google-web-fonts-2
function MaterialUI_IconsFont() {
    return (
        <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
    )
}

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <MaterialUI_RobotoFont />
        <MaterialUI_IconsFont />
        <MaterialUI_CssBaseline />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
