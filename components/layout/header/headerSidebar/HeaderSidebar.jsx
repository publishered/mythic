import DefaultButton from '@/components/UI/defaultButton/DefaultButton'
import { useState } from 'react'
import styles from './HeaderSidebar.module.css'
import HeaderSidebarBalance from './headerSidebarBalance/HeaderSidebarBalance'
import HeaderSidebarFriend from './headerSidebarFriend/HeaderSidebarFriend'
import HeaderSidebarInfo from './headerSidebarInfo/HeaderSidebarInfo'
import HeaderSidebarMenu from './headerSidebarMenu/HeaderSidebarMenu'
import HeaderSidebarPlayers from './headerSidebarPlayers/HeaderSidebarPlayers'
import HeaderSidebarTab from './headerSidebarTab/HeaderSidebarTab'

const HeaderSidebar = ({headerHeight, isOpenSidebar, mobile = false, offsetForSidebar}) => {

   const [isActiveTab, setIsActiveTab] = useState('solo')
   const [isPlayTabOpen, setIsPlayTabOpen] = useState(false) 
   const [isPlayTabTop, setIsPlayTabTop] = useState(false) 
   const [isFriendOpen, setIsFriendOpen] = useState(false) 

   const friendHandler = (isOpen) => {
      if (mobile) {

         if (isPlayTabOpen) {
            setIsFriendOpen(isOpen)
         } else {
            setIsPlayTabTop(prevState => !prevState)
         }
      } 
      setIsFriendOpen(isOpen)
   }

   const playHandler = (isOpen) => {
      if (isOpen) {
         setIsPlayTabTop(true)
      }

      if (isOpen && isFriendOpen) {
         setIsFriendOpen(false)
      }

      if (!isOpen && !isFriendOpen) {
         setIsPlayTabTop(false)
      }

      setIsPlayTabOpen(isOpen)
   }

   const headerHeightCounted = headerHeight - offsetForSidebar > 0 ? headerHeight - offsetForSidebar : 0

   return <aside 
         className={`${styles.sidebar} ${mobile ? styles.mobile : ''} ${isOpenSidebar ? styles.open : ''}`} 
         style={{height: `calc(100vh - ${headerHeightCounted}px)`, 
         top: `${headerHeightCounted}px`}}
      >
      <div className={`${styles.play} ${mobile ? styles.mobile : ''} ${isPlayTabOpen ? styles.open : ''} ${isPlayTabTop ? styles.top : ''}`}>
         <HeaderSidebarTab 
            isActiveTab={isActiveTab}
            setIsActiveTab={setIsActiveTab}
            playHandler={playHandler}
            isPlayTabOpen={isPlayTabOpen}
            mobile={mobile}
         />
         <div className={styles.sidebar__body}>
            <div className={styles.sidebar__inner}>
               {isActiveTab !== 'solo' ?
                  <HeaderSidebarPlayers 
                     maxPlayer={isActiveTab === 'wingman' ? 2 : 5}
                  /> 
               : ''}
               <HeaderSidebarInfo />
               <DefaultButton className={styles.sidebar__btn}>
                  PLAY
               </DefaultButton>
               <HeaderSidebarBalance />
            </div>
            <HeaderSidebarMenu/>
         </div>
      </div>
      <HeaderSidebarFriend mobile={mobile} isOpen={isFriendOpen} setIsOpen={friendHandler} />
   </aside>
}

export default HeaderSidebar