import useEmblaCarousel from 'embla-carousel-react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './HeaderTeamFortressMenu.module.css';

const HeaderTeamFortressMenu = () => {

   const {pathname} = useRouter()
   const [emblaRef] = useEmblaCarousel()

   return <nav className={styles.menu}>
      <ul className={styles.menu__list}>
         <HeaderTeamFortressMenuItem pathname={pathname} href="/team-fortress/tournaments">Tournaments</HeaderTeamFortressMenuItem>
      </ul>
      <div className={styles.slider} ref={emblaRef}>
         <ul className={styles.slider__container}>
            <HeaderTeamFortressMenuItem pathname={pathname} href="/team-fortress/tournaments">Tournaments</HeaderTeamFortressMenuItem>
         </ul>
      </div>
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