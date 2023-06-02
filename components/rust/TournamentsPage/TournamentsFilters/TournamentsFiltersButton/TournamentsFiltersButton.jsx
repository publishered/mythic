import styles from './TournamentsFiltersButton.module.css'

const TournamentsFiltersButton = ({children, filter, state, setState}) => {
   return <button
      className={`${styles.btn} ${filter === state ? styles.active : ''}`}
      onClick={() => setState(filter)}>
      {children}
   </button>
}

export default TournamentsFiltersButton