import * as React from 'react'
import Head from 'next/head'
import { Layout } from '../components/Layout'
import { HeroSection } from '../sections/HeroSection'
import { HighlightsSection } from '../sections/HighlightsSection'

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Layout>
        <HeroSection />
        <HighlightsSection />
      </Layout>
    </>
  )
}
