import Link from 'next/link'
import styles from './Sidebar.module.css'
import CsgoIcon from './icons/CsgoIcon'
import DotaIcon from './icons/DotaIcon'
import RustIcon from './icons/RustIcon'
import TeamFortressIcon from './icons/TeamFortressIcon'

const Sidebar = ({gamePage}) => {

   return <aside className={styles.sidebar}>
      <Link href="/cs-go/matchmaking" className={styles.sidebar__item}>
         <CsgoIcon color={gamePage === 'cs-go' ? 'var(--purple-color)' : 'white'}  />
      </Link>
      <Link href="/rust/tournaments" className={styles.sidebar__item}>
         <RustIcon color={gamePage === 'rust' ? 'var(--purple-color)' : 'white'} />
      </Link>
      <Link href="/dota/tournaments" className={styles.sidebar__item}>
         <DotaIcon color={gamePage === 'dota' ? 'var(--purple-color)' : 'white'} />
      </Link>
      <Link href="/team-fortress/tournaments" className={styles.sidebar__item}>
         <TeamFortressIcon color={gamePage === 'team-fortress' ? 'var(--purple-color)' : 'white'} />
      </Link>
   </aside>
}

export default Sidebar