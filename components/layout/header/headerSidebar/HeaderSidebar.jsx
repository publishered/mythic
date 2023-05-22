import DefaultButton from '@/components/UI/defaultButton/DefaultButton'
import { useState } from 'react'
import styles from './HeaderSidebar.module.css'
import HeaderSidebarBalance from './headerSidebarBalance/HeaderSidebarBalance'
import HeaderSidebarFriend from './headerSidebarFriend/HeaderSidebarFriend'
import HeaderSidebarInfo from './headerSidebarInfo/HeaderSidebarInfo'
import HeaderSidebarMenu from './headerSidebarMenu/HeaderSidebarMenu'
import HeaderSidebarPlayers from './headerSidebarPlayers/HeaderSidebarPlayers'
import HeaderSidebarTab from './headerSidebarTab/HeaderSidebarTab'

const HeaderSidebar = ({headerHeight, isOpenSidebar}) => {

   const [isActiveTab, setIsActiveTab] = useState('solo')

   return <aside 
         className={`${styles.sidebar} ${isOpenSidebar ? styles.open : ''}`} 
         style={{height: `calc(100vh - ${headerHeight}px)`, top: `${headerHeight}px`}}
      >
      <HeaderSidebarTab 
         isActiveTab={isActiveTab}
         setIsActiveTab={setIsActiveTab}
      />
      <div className={styles.sidebar__body}>
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
         <HeaderSidebarMenu />
      </div>
      <HeaderSidebarFriend />
   </aside>
}

export default HeaderSidebar