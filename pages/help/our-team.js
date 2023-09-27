import OurTeam from '@/components/help/ourTeam/OurTeam'
import seo from '@/services/seo'
import Head from 'next/head'

const ourTeam = () => {
   return <>
      <Head>
         <title>{seo.generateTitle('Our team')}</title>
      </Head>
      <OurTeam />
   </>
}

export default ourTeam