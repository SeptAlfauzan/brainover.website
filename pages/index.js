import Head from 'next/head'
import Navbar from '../components/navbar'
import HomeBanner from '../components/sections/homebanner'
import About from '../components/sections/about'
import Work from '../components/sections/work'
import ContactUs from '../components/sections/contactUs'
import React from 'react'
import { getDataProjects } from "../lib/dataProjects";
import PreviewImage from '../public/images/LOGO.png'

const Home = (props) => {
  const greeting = "Made with ❤ by Septa Alfauzan.\nMore information please go to"
  const myLink = "www.septaalfauzan.xyz"
  React.useEffect(() => console.log(greeting, myLink), [])

  return (
    <div>
      <Head>
        <title>Brain Over</title>
        <meta name="description" content="Let our team to make your idea come true." />
        <meta property='og:image' content={PreviewImage} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='flex flex-col bg-white'>
        <Navbar />
        <HomeBanner />
        <About />
        <Work listData={props.listData} />
        <ContactUs />
      </main>

      <footer>
      </footer>
    </div>
  )
}

export async function getStaticProps() {
  const res = await getDataProjects()
  const listData = JSON.parse(res)
  return {
    props: {
      listData
    },
  }
}

export default Home
