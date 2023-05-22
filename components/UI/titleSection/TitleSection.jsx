import styles from './TitleSection.module.css'

const TitleSection = ({children, title, className}) => {
   return <div className={`${styles['title-section']} ${className}`}>
      <h1 className={styles['title-section__title']}>{title}</h1>
      <div className={styles['title-section__text']}>
         {children}
      </div>
   </div>
}

export default TitleSection