import seo from '@/services/seo'
import Head from 'next/head'

const { default: TermsAndCondition } = require('@/components/help/termsAndCondition/TermsAndCondition')

const termsAndConditions = () => {
   return <>
      <Head>
         <title>{seo.generateTitle('Terms & Conditions')}</title>
      </Head>
      <TermsAndCondition />
   </>
}

export default termsAndConditions