import Acknowledge from "@/components/Landing/acknowledge";
import FAQ from "@/components/Landing/faq";
import Hero from "@/components/Landing/hero";
import Opportunities from "@/components/Landing/opportunities";
import Partners from "@/components/Landing/partners";
import Head from 'next/head';
import Image from 'next/image'

const Home = () => {
  return (
    <>
      <Head>
        <title>Home | Fursa Web</title>
      </Head>
      <div className='bg-image-wrapper'>
        <Image

          src="/images/mombasa.png"
          // width={600}
          // height={500}
          quality ='100'
          alt="mombasa"
          layout='fill'
          // className="img-fluid "
          
        />
      </div>
      <Hero />
      <Acknowledge />
      <Opportunities />
      <Partners />
      <FAQ />

    </>
  )
}

export default Home;