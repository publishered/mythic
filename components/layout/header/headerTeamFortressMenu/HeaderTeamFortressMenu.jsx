import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from './HeaderTeamFortressMenu.module.css'

const HeaderTeamFortressMenu = () => {

   const {pathname} = useRouter()

   return <nav className={styles.menu}>
      <ul className={styles.menu__list}>
         <HeaderTeamFortressMenuItem pathname={pathname} href="/team-fortress/tournaments">Tournaments</HeaderTeamFortressMenuItem>
      </ul>
   </nav>
}

const HeaderTeamFortressMenuItem = ({children, href, pathname}) => {

   return <li 
   className={`${styles.menu__item} 
   ${(href === '/team-fortress/tournaments' && pathname.includes('/team-fortress/tournament')) || pathname === href ? styles.active : ''}`}>
   <Link 
      className={styles.menu__link} 
      href={href}
   >
      {children}
   </Link>
</li>
}

export default HeaderTeamFortressMenu