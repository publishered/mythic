import OnUpdate from '@/components/additionalPages/onUpdate/OnUpdate'
import seo from '@/services/seo'
import Head from 'next/head'

const update = () => {
   return <>
      <Head>
         <title>{seo.generateTitle('This site is being updated')}</title>
      </Head>
      <OnUpdate />
   </>
}

export default update