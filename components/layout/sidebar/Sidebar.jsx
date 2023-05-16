import Image from 'next/image'
import Link from 'next/link'
import styles from './Sidebar.module.css'

const Sidebar = () => {
   return <aside className={styles.sidebar}>
      <Link href="/game/csgo" className={styles.sidebar__item}>
         <Image src="/images/icon/cs-go.svg" width="27" height="35" alt='cs:go game' />
      </Link>
      <Link href="/game/rust" className={styles.sidebar__item}>
         <Image src="/images/icon/rust.svg" width="40" height="40" alt='rust game' />
      </Link>
      <Link href="/game/dota" className={styles.sidebar__item}>
         <Image src="/images/icon/dota2.svg" width="35" height="35" alt='dota2 game' />
      </Link>
      <Link href="/game/team-fortress" className={styles.sidebar__item}>
         <Image src="/images/icon/tf2.svg" width="40" height="40" alt='team fortress game' />
      </Link>
   </aside>
}

export default Sidebar