import styles from './Border.module.css'

const Border = ({children, className}) => {
   return <div className={`${styles.border} ${className}`}>
      {children}
   </div>
}

export default Border