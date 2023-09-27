import SettingsPage from '@/components/settingsPage/SettingsPage'
import seo from '@/services/seo'
import Head from 'next/head'

const Settings = () => {
   return <>
      <Head>
         <title>{seo.generateTitle('Settings')}</title>
      </Head>
      <SettingsPage />
   </>
}

export default Settings