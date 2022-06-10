import { createTheme, ThemeProvider } from '@mui/material'
import { NextPage } from 'next'
import Head from 'next/head'
import MyComponent from '../components/component'

const Home: NextPage = () => {
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  })

  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='format-detection' content='telephone=no, email=no, address=no' />
        <meta name='description' content='Next App' />
        <meta name='ui-version' content={process.env.APP_VERSION} />
        <title>Next App</title>
        <link rel='icon' type='image/svg+xml' href='/favicon.svg' />
      </Head>

      <ThemeProvider theme={darkTheme}>
        <MyComponent />
      </ThemeProvider>
    </>
  )
}

export default Home
