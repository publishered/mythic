import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from './HeaderDotaMenu.module.css'

const HeaderDotaMenu = () => {

   const {pathname} = useRouter()

   return <nav className={styles.menu}>
      <ul className={styles.menu__list}>
         <HeaderDotaMenuItem pathname={pathname} href="/dota/tournaments">Tournaments</HeaderDotaMenuItem>
         <HeaderDotaMenuItem pathname={pathname} href="/dota/vote-for-a-teams">Vote for a teams</HeaderDotaMenuItem>
      </ul>
   </nav>
}

const HeaderDotaMenuItem = ({children, href, pathname}) => {

   return <li 
   className={`${styles.menu__item} 
   ${(href === '/dota/tournaments' && pathname.includes('/dota/tournament')) || pathname === href ? styles.active : ''}`}>
   <Link 
      className={styles.menu__link} 
      href={href}
   >
      {children}
   </Link>
</li>
}

export default HeaderDotaMenu