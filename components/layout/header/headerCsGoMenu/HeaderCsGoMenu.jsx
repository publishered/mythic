import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from './HeaderCsGoMenu.module.css'

const HeaderCsGoMenu = () => {

   const {pathname} = useRouter()

   return <nav className={styles.menu}>
      <ul className={styles.menu__list}>
         <HeaderCsGoMenuItem pathname={pathname} href="/cs-go/matchmaking">Matchmaking</HeaderCsGoMenuItem>
         <HeaderCsGoMenuItem pathname={pathname} href="/cs-go/tournaments">Tournaments</HeaderCsGoMenuItem>
         <HeaderCsGoMenuItem pathname={pathname} href="/cs-go/team-finder">Team finder</HeaderCsGoMenuItem>
         <HeaderCsGoMenuItem pathname={pathname} href="/cs-go/vote-for-a-teams">Vote for a teams</HeaderCsGoMenuItem>
      </ul>
   </nav>
}

const HeaderCsGoMenuItem = ({children, href, pathname}) => {

   return <li className={styles.menu__item}>
   <Link 
      className={`${styles.menu__link} 
      ${(href === '/cs-go/tournaments' && pathname.includes('/cs-go/tournament')) || pathname === href ? styles.active : ''}`} 
      href={href}
   >
      {children}
   </Link>
</li>
}

export default HeaderCsGoMenu