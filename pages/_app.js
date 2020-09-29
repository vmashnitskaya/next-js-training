function MyApp({ Component, pageProps }) {
    return <>
        <Component {...pageProps} />
        <style jsx global>{`
         body {
           font-family: 'Parisienne', cursive;
         }
        `}</style>
    </>
            }

export default MyApp