import 'styles/global.css';
import 'styles/global-fonts.css';
import { AppProps } from 'next/app'
import React from 'react'
import { themeColors } from 'styles/colors'
import { ThemeProvider } from 'styled-components'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={{ colors: themeColors }}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
