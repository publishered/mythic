import useEmblaCarousel from 'embla-carousel-react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './HeaderRustMenu.module.css';


const HeaderRustMenu = () => {

   const [emblaRef] = useEmblaCarousel()
   const {pathname} = useRouter()

   return <nav className={styles.menu}>
      <ul className={styles.menu__list}>
         <HeaderCsGoMenuItem pathname={pathname} href="/rust/tournaments">Tournaments</HeaderCsGoMenuItem>
         <HeaderCsGoMenuItem pathname={pathname} href="/rust/vote-for-a-teams">Vote for a teams</HeaderCsGoMenuItem>
      </ul>
      <div className={styles.slider} ref={emblaRef}>
         <ul className={styles.slider__container}>
            <HeaderCsGoMenuItem pathname={pathname} href="/rust/tournaments">Tournaments</HeaderCsGoMenuItem>
            <HeaderCsGoMenuItem pathname={pathname} href="/rust/vote-for-a-teams">Vote for a teams</HeaderCsGoMenuItem>
         </ul>
      </div>
   </nav>
}

const HeaderCsGoMenuItem = ({children, href, pathname}) => {

   return <li 
   className={`${styles.menu__item} 
   ${(href === '/rust/tournaments' && pathname.includes('/rust/tournament')) || pathname === href ? styles.active : ''}`}>
   <Link 
      className={styles.menu__link} 
      href={href}
   >
      {children}
   </Link>
</li>
}

export default HeaderRustMenu