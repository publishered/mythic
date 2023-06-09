import Image from 'next/image'
import Link from 'next/link'
import styles from './AuthorizatedButton.module.css'

const AuthorizatedButton = ({setIsOpenSidebar}) => {
   return <>
      <Link href="/profile#invites" className={styles['header__right-notification']}>
      <Image 
         className={styles['header__right-notification-image']}
         src="/images/icon/notification.svg"
         width="24"
         height="24"
         alt='notification'
      />
      <span className={styles['header__right-notification-circle']}></span>
      </Link>
      <Link href="/profile" className={styles['header__right-user']}>
         <span className={styles['header__right-user-nickname']}>monkey</span>
         <Image 
            className={styles['header__right-user-nickname']} 
            src="/images/avatar.svg"
            width="50"
            height="50"
            alt='avatar'
         />
      </Link>
      <button className={styles['header__right-sidebar-btn']} onClick={() => setIsOpenSidebar(prevState => !prevState)}>
         <Image 
            className={styles['header__right-sidebar-btn-img']}
            src="/images/icon/menu-sidebar.svg"
            width="20"
            height="14"
            alt="sidebar menu"
         />
      </button>
   </> 
}

export default AuthorizatedButton