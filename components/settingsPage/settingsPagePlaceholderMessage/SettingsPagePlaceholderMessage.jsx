import styles from './SettingsPagePlaceholderMessage.module.css'

const SettingsPagePlaceholderMessage = ({text}) => {
   return <p className={styles.msg}>
      {text}
   </p>
}

export default SettingsPagePlaceholderMessage