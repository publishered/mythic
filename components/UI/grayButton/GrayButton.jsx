import Link from 'next/link'
import styles from './GrayButton.module.css'

const GrayButton = ({href, children, className, onClick, disabled = false}) => {

   if (href) {
      return <Link href={href} className={`${styles.button} ${className ? className : ''}`}>
         {children}
      </Link>
   }

   return <button onClick={onClick} disabled={disabled} href={href} className={`${styles.button} ${className ? className : ''}`}>
      {children}
   </button>
}

export default GrayButton