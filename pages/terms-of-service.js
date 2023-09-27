import TermsOfService from '@/components/termsOfService/TermsOfService'
import seo from '@/services/seo'
import Head from 'next/head'

const TermsOfServicePage = () => {
   return <>
      <Head>
         <title>{seo.generateTitle('Terms of Service')}</title>
      </Head>
      <TermsOfService />
   </>
}

export default TermsOfServicePage