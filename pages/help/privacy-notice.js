import PrivacyNotice from '@/components/help/privacyNotice/PrivacyNotice'
import seo from '@/services/seo'
import Head from 'next/head'

const privacyNotice = () => {
   return <>
      <Head>
         <title>{seo.generateTitle('Privacy Notice for recruitment')}</title>
      </Head>
      <PrivacyNotice />
   </>
}

export default privacyNotice