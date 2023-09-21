import styles from './TournamentsFilters.module.css'
import TournamentsFiltersButton from './TournamentsFiltersButton/TournamentsFiltersButton'

const TournamentsFilters = ({timeFilter, setTimeFilter, modeFilter, setModeFilter, game}) => {
   return <div className={styles.filters}>
      <div className={styles.filters__block}>
         <TournamentsFiltersButton
            setState={setTimeFilter}
            state={timeFilter}
            filter={'upcoming'}
         >
            Upcoming
         </TournamentsFiltersButton>
         <TournamentsFiltersButton
            setState={setTimeFilter}
            state={timeFilter}
            filter={'running'}
         >
            Running
         </TournamentsFiltersButton>
         <TournamentsFiltersButton
            setState={setTimeFilter}
            state={timeFilter}
            filter={'finished'}
         >
            Finished
         </TournamentsFiltersButton>
      </div>
      {game === 'cs-go' ?
         <div className={styles.filters__block}>
            <TournamentsFiltersButton
               setState={setModeFilter}
               state={modeFilter}
               filter={'1v1'}
            >
               1v1
            </TournamentsFiltersButton>
            <TournamentsFiltersButton
               setState={setModeFilter}
               state={modeFilter}
               filter={'2v2'}
            >
               2v2
            </TournamentsFiltersButton>
            <TournamentsFiltersButton
               setState={setModeFilter}
               state={modeFilter}
               filter={'5v5'}
            >
               5v5
            </TournamentsFiltersButton>
         </div> 
      : ''}
   </div>
}

export default TournamentsFilters