import PrivacyPolicy from '@/components/help/privacyPolicy/PrivacyPolicy'
import seo from '@/services/seo'
import Head from 'next/head'


const privacyPolicy = () => {
   return <>
      <Head>
         <title>{seo.generateTitle('Privacy Policy')}</title>
      </Head>
      <PrivacyPolicy/>
   </>
}

export default privacyPolicy