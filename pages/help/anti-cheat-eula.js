import AntiCheat from '@/components/help/antiCheat/AntiCheat'
import seo from '@/services/seo'
import Head from 'next/head'

const antiCheatEula = () => {
   return <>
      <Head>
         <title>{seo.generateTitle('Anti-cheat software')}</title>
      </Head>
      <AntiCheat />
   </>
}

export default antiCheatEula