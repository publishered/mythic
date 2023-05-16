import styles from './HomeSectionH2.module.css'

const HomeSectionH2 = ({children}) => {
   return <h2 className={styles.title}>{children}</h2>
}

export default HomeSectionH2