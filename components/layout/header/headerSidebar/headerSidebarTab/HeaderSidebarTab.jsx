import Image from 'next/image'
import styles from './HeaderSidebarTab.module.css'

const HeaderSidebarTab = ({isActiveTab, setIsActiveTab, mobile, playHandler, isPlayTabOpen}) => {

   const clickHandler = mobile ? () => playHandler(!isPlayTabOpen) : () => ''
   console.log(isActiveTab)
   const changeTabHandler = (e, tab) => {
      if (!mobile) {
         setIsActiveTab(tab)
      }

      if (isPlayTabOpen) {
         e.stopPropagation()
         setIsActiveTab(tab)
      }
   }

   return <nav 
      className={`${styles.sidebar__tab}
       ${mobile ? styles.mobile : ''} 
       ${isPlayTabOpen ? styles.open : ''}`}
      onClick={clickHandler}
   >
      <div className={styles['sidebar__tab-button']}>
         <button
            onClick={(e) => changeTabHandler(e, 'solo')}
            className={`${styles['sidebar__tab-btn']} ${isActiveTab === 'solo' ? styles['active'] : ''}`}
         >
            Solo
         </button>
         <button
            onClick={(e) => changeTabHandler(e, 'wingman')}
            className={`${styles['sidebar__tab-btn']} ${isActiveTab === 'wingman' ? styles['active'] : ''}`}
         >
            Wingman
         </button>
         <button
            onClick={(e) => changeTabHandler(e, 'party')}
            className={`${styles['sidebar__tab-btn']} ${isActiveTab === 'party' ? styles['active'] : ''}`}
         >
            Party
         </button>
      </div>
      {mobile ?
         <Image 
            className={styles['sidebar__top-arrow']}
            src="/images/icon/arrow-up.svg"
            width="9"
            height="5"
            alt='arrow'
         />
         : ''
      }
   </nav>
}

export default HeaderSidebarTab