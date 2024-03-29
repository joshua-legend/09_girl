import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang='ko'>
        <Head>
          <link rel='preconnect' href='https://fonts.googleapis.com' />
          <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin={''} />
          <link href='https://fonts.googleapis.com/css2?family=Black+Han+Sans&family=Nanum+Pen+Script&family=Single+Day&family=Song+Myung&family=Dongle&display=swap' rel='stylesheet' />
          {/* eslint-disable-next-line @next/next/no-sync-scripts */}
          <script type='text/javascript' src='https://static.nid.naver.com/js/naveridlogin_js_sdk_2.0.0.js' charSet='utf-8' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
