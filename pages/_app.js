function MyApp({Component, pageProps}) {
    return <>
        <Component {...pageProps} />
        <style jsx global>{`
         body {
           font-family: 'Roboto', 'Arial', sans-serif;
         }
        `}</style>
    </>
}

export default MyApp