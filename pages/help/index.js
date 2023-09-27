import Help from '@/components/help/help/Help'
import seo from '@/services/seo'
import Head from 'next/head'

const help = () => {
   return <>
      <Head>
         <title>{seo.generateTitle('Help')}</title>
      </Head>
      <Help />
   </>
}

export default help