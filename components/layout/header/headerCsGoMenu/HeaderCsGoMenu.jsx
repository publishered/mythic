import useEmblaCarousel from 'embla-carousel-react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './HeaderCsGoMenu.module.css';

const HeaderCsGoMenu = () => {

   const {pathname} = useRouter()

   const [emblaRef] = useEmblaCarousel()

   return <nav className={styles.menu}>
      <ul className={styles.menu__list}>
         <HeaderCsGoMenuItem pathname={pathname} href="/cs-go/matchmaking">Matchmaking</HeaderCsGoMenuItem>
         <HeaderCsGoMenuItem pathname={pathname} href="/cs-go/tournaments">Tournaments</HeaderCsGoMenuItem>
         <HeaderCsGoMenuItem pathname={pathname} href="/cs-go/team-finder">Team finder</HeaderCsGoMenuItem>
         <HeaderCsGoMenuItem pathname={pathname} href="/cs-go/vote-for-a-teams">Vote for a teams</HeaderCsGoMenuItem>
      </ul>
      <div className={styles.slider} ref={emblaRef}>
         <ul className={styles.slider__container}>
            <HeaderCsGoMenuItem pathname={pathname} href="/cs-go/matchmaking">Matchmaking</HeaderCsGoMenuItem>
            <HeaderCsGoMenuItem pathname={pathname} href="/cs-go/tournaments">Tournaments</HeaderCsGoMenuItem>
            <HeaderCsGoMenuItem pathname={pathname} href="/cs-go/team-finder">Team finder</HeaderCsGoMenuItem>
            <HeaderCsGoMenuItem pathname={pathname} href="/cs-go/vote-for-a-teams">Vote for a teams</HeaderCsGoMenuItem>
         </ul>
      </div>
   </nav>
}

const HeaderCsGoMenuItem = ({children, href, pathname}) => {
   return <li 
   className={`${styles.menu__item} 
   ${(href === '/cs-go/tournaments' && pathname.includes('/cs-go/tournament')) || pathname === href ? styles.active : ''}`}>
   <Link 
      className={styles.menu__link} 
      href={href}
   >
      {children}
   </Link>
</li>
}

const HeaderCsGoMenuItemMob = ({children, href, pathname}) => {
   return <SwiperSlide
   className={`${styles.menu__item} 
   ${(href === '/cs-go/tournaments' && pathname.includes('/cs-go/tournament')) || pathname === href ? styles.active : ''}`}>
      <Link 
         className={styles.menu__link} 
         href={href}
      >
         {children}
      </Link>
   </SwiperSlide>
}

export default HeaderCsGoMenu