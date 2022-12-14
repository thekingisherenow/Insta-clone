import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Feed from '../components/Feed'
// import styles from '../styles/Home.module.css'
import React from 'react'
import Modal from '../components/Modal'


export default function Home() {
  return (
    <div >
      <Head>
        <title> Instagram 2.0</title> 
        
        <link rel ="shortcut icon" href="/favicon.png"/>
        <meta property="og:Instagram2.0" content="This is a clone of original 
        Instagram." key="title" />
        </Head>
        
        <Header />
        <Feed />
        <Modal/>



    </div>
  )
}
