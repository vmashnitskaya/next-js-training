import React from 'react';
import Link from 'next/link';
import {MainLayout} from "../components/MainLayout";

export default function Index(){
    return <MainLayout title="Hello NextJS">
        <h1>Hello NextJS</h1>
        <p><Link  href="/about"><a>About</a></Link></p>
        <p><Link href="/about/author"><a>About Author</a></Link></p>
        <p><Link href="/posts"><a>Posts</a></Link></p>
    </MainLayout>
}