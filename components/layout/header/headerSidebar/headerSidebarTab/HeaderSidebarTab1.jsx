import styles from './HeaderSidebarTab.module.css'

const HeaderSidebarTab = ({isActiveTab, setIsActiveTab}) => {
   return <nav className={styles.sidebar__tab}>
      <button
         onClick={() => setIsActiveTab('solo')}
         className={`${styles['sidebar__tab-btn']} ${isActiveTab === 'solo' ? styles['active'] : ''}`}
      >
         Solo
      </button>
      <button
         onClick={() => setIsActiveTab('wingman')}
         className={`${styles['sidebar__tab-btn']} ${isActiveTab === 'wingman' ? styles['active'] : ''}`}
      >
         Wingman
      </button>
      <button
         onClick={() => setIsActiveTab('party')}
         className={`${styles['sidebar__tab-btn']} ${isActiveTab === 'party' ? styles['active'] : ''}`}
      >
         Party
      </button>
   </nav>
}

export default HeaderSidebarTab