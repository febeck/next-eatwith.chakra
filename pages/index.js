import * as React from 'react'
import Head from 'next/head'
import { Header } from '../components/Header'

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Header />
      <main />
      <footer />
    </>
  )
}
