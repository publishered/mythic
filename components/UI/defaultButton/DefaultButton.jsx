import Link from 'next/link'
import { forwardRef } from 'react'
import styles from './DefaultButton.module.css'

const DefaultButton = forwardRef(({href, children, className, onClick, disabled = false}, ref) => {

   if (href) {
      return <Link href={href} ref={ref} className={`${styles.button} ${className ? className : ''}`}>
         {children}
      </Link>
   }

   return <button ref={ref} onClick={onClick} disabled={disabled} href={href} className={`${styles.button} ${className ? className : ''}`}>
      {children}
   </button>
})

export default DefaultButton