import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Container from '../UI/container/Container'
import styles from './SettingsPage.module.css'
import SettingsPageBanHistory from './settingsPageBanHistory/SettingsPageBanHistory'
import SettingsPageGameSetting from './settingsPageGameSetting/SettingsPageGameSetting'
import SettingsPagePremium from './settingsPagePremium/SettingsPagePremium'
import SettingsPagePrivacy from './settingsPagePrivacy/SettingsPagePrivacy'
import SettingsPageProfile from './settingsPageProfile/SettingsPageProfile'
import SettingsPageSidebar from './settingsPageSidebar/SettingsPageSidebar'
import SettingsPageSocialMedia from './settingsPageSocialMedia/SettingsPageSocialMedia'
import SettingsPageVerification from './settingsPageVerification/SettingsPageVerification'

const SettingsPage = () => {

   const {asPath} = useRouter()
   const [activeAnchor, setActiveAnchor] = useState('profile')

   console.log(activeAnchor)
   useEffect(() => {
      asPath.split('#')[1] ? setActiveAnchor(asPath.split('#')[1]) : ''
   }, [asPath]);

   return <section className={styles.settings}>
      <Container>
         <div className={styles.settings__inner}>
            <SettingsPageSidebar activeAnchor={activeAnchor} />
            {activeAnchor === 'profile' ? 
               <SettingsPageProfile />
            : ''}
            {activeAnchor === 'privacy' ? 
               <SettingsPagePrivacy />
            : ''}
            {activeAnchor === 'social-media' ? 
               <SettingsPageSocialMedia />
            : ''}
            {activeAnchor === 'game-settings' ? 
               <SettingsPageGameSetting />
            : ''}
            {activeAnchor === 'ban-history' ? 
               <SettingsPageBanHistory />
            : ''}
            {activeAnchor === 'verification' ? 
               <SettingsPageVerification />
            : ''}
            {activeAnchor === 'premium' ? 
               <SettingsPagePremium />
            : ''}
         </div>
      </Container>
   </section>
}

export default SettingsPage