import styles from './SettingsPageSidebar.module.css'
import SettingsPageSidebarItem from './settingsPageSidebarItem/SettingsPageSidebarItem'

const SettingsPageSidebar = ({activeAnchor}) => {
   return <aside className={styles.sidebar}>
      <nav className={styles.menu}>
         <SettingsPageSidebarItem anchor={activeAnchor}>Profile</SettingsPageSidebarItem>
         <SettingsPageSidebarItem anchor={activeAnchor}>Privacy</SettingsPageSidebarItem>
         <SettingsPageSidebarItem anchor={activeAnchor}>Social media</SettingsPageSidebarItem>
         <SettingsPageSidebarItem anchor={activeAnchor}>Game settings</SettingsPageSidebarItem>
         <SettingsPageSidebarItem anchor={activeAnchor}>Ban history</SettingsPageSidebarItem>
         <SettingsPageSidebarItem anchor={activeAnchor}>Verification</SettingsPageSidebarItem>
         <SettingsPageSidebarItem anchor={activeAnchor}>Premium</SettingsPageSidebarItem>
      </nav>
   </aside>
}

export default SettingsPageSidebar