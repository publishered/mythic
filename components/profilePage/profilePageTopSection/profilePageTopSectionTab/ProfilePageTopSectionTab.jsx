import Link from 'next/link'
import styles from './ProfilePageTopSectionTab.module.css'

const ProfilePageTopSectionTab = ({children, anchor}) => {
   return <Link 
      className={`${styles.tab} ${children.toLowerCase() === anchor ? styles.active : ''}`} 
      href={`#${children.toLowerCase()}`}
   >
      {children}
   </Link>
}

export default ProfilePageTopSectionTab