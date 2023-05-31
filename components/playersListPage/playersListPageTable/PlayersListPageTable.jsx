import LoadMore from '@/components/UI/loadMore/LoadMore'
import styles from './PlayersListPageTable.module.css'
import PlayersListPageTableItem from './playersListPageTableItem/PlayersListPageTableItem'

const PlayersListPageTable = () => {
   return <div className={styles.table}>
      <div className={styles.table__head}>
         <span className={styles['table__head-item']}>Username</span>
         <span className={styles['table__head-item']}>Top</span>
         <span className={styles['table__head-item']}>Rating</span>
         <span className={styles['table__head-item']}>% wins</span>
         <span className={styles['table__head-item']}>K/D</span>
         <span className={styles['table__head-item']}>Joined</span>
         <span className={styles['table__head-item']}>Rating change</span>
      </div>
      <div className={styles.table__body}>
         <PlayersListPageTableItem change='down' />
         <PlayersListPageTableItem change='up' />
         <PlayersListPageTableItem change='down' />
         <PlayersListPageTableItem change='up' />
         <PlayersListPageTableItem change='down' />
         <PlayersListPageTableItem change='up' />
         <PlayersListPageTableItem change='down' />
         <PlayersListPageTableItem change='up' />
         <PlayersListPageTableItem change='down' />
         <PlayersListPageTableItem change='up' />
         <LoadMore />
      </div>
   </div>
}

export default PlayersListPageTable