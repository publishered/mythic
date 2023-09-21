import AuthContext from '@/context/AuthContext'
import saveChanges from '@/services/settings/saveChanges'
import { useRouter } from 'next/router'
import { useContext, useEffect, useState } from 'react'
import Cookies from 'universal-cookie'
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

const initSettingsState = {
   avatar_path: '',
}

const SettingsPage = () => {

   const {asPath, push} = useRouter()
   const [activeAnchor, setActiveAnchor] = useState('profile')

   const authContext = useContext(AuthContext)

   console.log(activeAnchor)
   useEffect(() => {
      asPath.split('#')[1] ? setActiveAnchor(asPath.split('#')[1]) : ''
   }, [asPath]);


   const [settings, setSettings] = useState(initSettingsState)


   const discardHandler = e => {
      setSettings(initSettingsState)
      push('/profile')
   }

   const saveHandler = e => {
      const formData = new FormData()

      const cookie = new Cookies()

      formData.append("avatar_file", settings.avatar_path)
      formData.append("auth_token", cookie.get('auth_token'))

      saveChanges(formData).then(res => {
         if (res === 'success') {
            authContext.getMainInfo()
         }
         
         push('/profile')
      })
   }

   return <section className={styles.settings}>
      <Container>
         <div className={styles.settings__inner}>
            <SettingsPageSidebar activeAnchor={activeAnchor} />
            {activeAnchor === 'profile' ? 
               <SettingsPageProfile setSettings={setSettings} />
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