import LoadMore from '@/components/UI/loadMore/LoadMore'
import styles from './PlayersListPageTable.module.css'
import PlayersListPageTableItem from './playersListPageTableItem/PlayersListPageTableItem'

const PlayersListPageTable = () => {
   return <div className={styles.table}>
      <div className={styles.table__head}>
         <span className={styles['table__head-item']}>Username</span>
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
      </div>
      <LoadMore />
   </div>
}

export default PlayersListPageTable