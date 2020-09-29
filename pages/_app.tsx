import '../styles/globals.scss'
import Head from 'next/head'
function MyApp({ Component, pageProps }) {
    return <>
    <Head>
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons"rel="stylesheet"></link>
    </Head>
         <Component {...pageProps}/>
    </>
}

export default MyApp