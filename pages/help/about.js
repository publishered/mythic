import seo from '@/services/seo'
import Head from 'next/head'

const { default: About } = require('@/components/help/about/About')

const about = () => {
   
   return <>
      <Head>
         <title>{seo.generateTitle('About us')}</title>
      </Head>
      <About />
   </>
}

export default about