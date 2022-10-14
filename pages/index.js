import Head from 'next/head'
import About from '../components/about/about'
import Header from '../components/header/header'
import Navigation from '../components/navigation/navigation'
import Projects from '../components/projects/projects'

export default function Home() {
  return (
    <>
      <Head>
        <title>Zoey Bosman</title>
        <meta name="description" content="Zoey Bosman's portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navigation href="#"/>
      <Header />
      <About />
      <Projects />
    </>
  )
}
