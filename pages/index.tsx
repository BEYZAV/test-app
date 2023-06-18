import { Inter } from 'next/font/google'
import Home from '@/components/screens/home/Home'
import Header from '@/components/modules/header/Header'
import Footer from '@/components/modules/footer/Footer'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Nike</title>
        <meta property="og:title" content="My page title" key="title" />
      </Head>
      <Header />
      <Home />
      <Footer />
    </>
  )
}
