import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Container from '../UI/container/Container'
import DefaultButton from '../UI/defaultButton/DefaultButton'
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

   const {asPath, push} = useRouter()
   const [activeAnchor, setActiveAnchor] = useState('profile')

   console.log(activeAnchor)
   useEffect(() => {
      asPath.split('#')[1] ? setActiveAnchor(asPath.split('#')[1]) : ''
   }, [asPath]);


   const discardHandler = e => {
      push('/profile')
   }

   const saveHandler = e => {
      push('/profile')
   }

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
         <div className={styles.buttons}>
            <button className={styles.button__discard} onClick={discardHandler}>discard changes</button>
            <DefaultButton className={styles.button__save} onClick={saveHandler}>Save changes</DefaultButton>
         </div>
      </Container>
   </section>
}

export default SettingsPage