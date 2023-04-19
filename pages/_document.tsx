import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head >
      <link rel="icon" href="/favicon-16x16.png" type="image/png"/>
        </Head>
      <body className='h-screen  bg-gradient-to-r from-slate-800 to-slate-400 font-mono'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
