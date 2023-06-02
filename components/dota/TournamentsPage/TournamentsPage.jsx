import { useState } from 'react'
import TournamentsFilters from './TournamentsFilters/TournamentsFilters'
import styles from './TournamentsPage.module.css'
import TournamentsTable from './TournamentsTable/TournamentsTable'

const TournamentsPage = () => {

   const [timeFilter, setTimeFilter] = useState('upcoming')
   const [modeFilter, setModeFilter] = useState('1v1')

   return <>
      {/* <TitleSection 
         title="Play 3 tournaments for a chance to win a share of $25.00"
         className={styles['tournaments__title']}
      > 
         <p>The more you win, the higher your chance of getting picked.</p>
         <p>3 winners are chosen randomly every Monday!</p>
      </TitleSection> */}
      <TournamentsFilters 
         timeFilter={timeFilter}
         setTimeFilter={setTimeFilter}

         modeFilter={modeFilter}
         setModeFilter={setModeFilter}
      />
      <h2 className={styles.tournaments__date}>Sunday, 04/03</h2>
      <TournamentsTable />
      <button className={styles.tournaments__loadMore}>
         load more
      </button>
   </>
}

export default TournamentsPage