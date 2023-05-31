import styles from './SettingsPageSection.module.css'

const SettingsPageSection = ({title, children}) => {
   return <div className={styles.section}>
      <h2 className={styles.section__head}>{title}</h2>
      <div className={styles.section__inner}>
         {children}
      </div>
   </div>
}

export default SettingsPageSection