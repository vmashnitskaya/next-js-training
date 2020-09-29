import React from 'react';
import Router from 'next/router';
import {MainLayout} from "../../components/MainLayout";

export default function About(){

    const handleLinkClick = () =>{
        Router.push('/');
    }

    return <MainLayout>
        <h1>Hello About</h1>
        <button onClick={handleLinkClick}>Go back to home</button>
        </MainLayout>
}