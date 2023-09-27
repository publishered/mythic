import Security from '@/components/help/security/Security'
import seo from '@/services/seo'
import Head from 'next/head'

const security = () => {
   <Head>
      <title>{seo.generateTitle('Security')}</title>
   </Head>
   return <Security />
}

export default security