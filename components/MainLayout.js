import Link from "next/link";
import Head from "next/head";

export function MainLayout({children, title="Default Title"}){
    return(
        <>
            <Head>
                <title>{title}</title>
                <meta name="keywords" content="next,javascript,nextjs,react"/>
                <meta name="description" content="This is training course for NextJS"/>
                <meta charSet="utf-8" />
            </Head>
            <nav>
                <Link  href="/"><a>Main Page</a></Link>
                <Link  href="/about"><a>About</a></Link>
                <Link href="/posts"><a>Posts</a></Link>
            </nav>
            <main>{children}</main>
            <style jsx>{`
            nav{
                display: flex;
                justify-content: space-around;
                align-items: center;
                position: fixed;
                height: 60px;
                left: 0;
                right: 0;
                top: 0;
                background: pink;
               }
                a{
                color: purple;
                text-decoration: none;
               }
               main{
               margin-top: 60px;
               padding: 1rem;
               }
                `}
            </style>
        </>
    )
}