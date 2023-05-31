import Link from 'next/link'
import styles from './SettingsPageSidebarItem.module.css'

const SettingsPageSidebarItem = ({children, anchor}) => {

   const linkFromText = children.toLowerCase().replaceAll(' ', '-')

   return <Link href={`#${linkFromText}`} className={`${styles.link} ${anchor === linkFromText ? styles.active : ""}`}>
      {children}
   </Link>
}

export default SettingsPageSidebarItem