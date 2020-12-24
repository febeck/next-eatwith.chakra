import * as React from 'react'
import Head from 'next/head'
import { Layout } from '../components/Layout'
import { HeroSection } from '../components/HeroSection'

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Layout>
        <HeroSection />
      </Layout>
    </>
  )
}
