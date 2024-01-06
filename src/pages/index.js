import Acknowledge from "@/components/Landing/acknowledge";
import FAQ from "@/components/Landing/faq";
import Hero from "@/components/Landing/hero";
import Opportunities from "@/components/Landing/opportunities";
import Partners from "@/components/Landing/partners";
import Head from 'next/head';

const Home = () => {
  return (
    <>
      <Head>
        <title>Home | Fursa Web</title>
      </Head>

      <Hero/>
      <Acknowledge />
      <Opportunities />
      <Partners id="partners"/>
      <FAQ />
    </>
  )
}

export default Home;