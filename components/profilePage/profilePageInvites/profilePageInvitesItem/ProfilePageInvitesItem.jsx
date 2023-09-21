import DefaultButton from '@/components/UI/defaultButton/DefaultButton'
import Image from 'next/image'
import styles from './ProfilePageInvitesItem.module.css'

const ProfilePageInvitesItem = ({src, title, onClick}) => {
   return <div className={styles.item}>
      <div className={styles.item__left}>
         <Image 
            width="50"
            height="50"
            className={styles.item__img}
            alt="avatar"
            src={src}
         />
         <div className={styles.item__info}>
            <p className={styles['item__info-title']}>{title}</p>
            {/* <p className={styles['item__info-text']}>You will not be able to accept this invitation until your account has been verified</p> */}
         </div>
      </div>
      <DefaultButton className={styles.item__btn} onClick={onClick}>
         Accept invite
      </DefaultButton>
   </div>
}

export default ProfilePageInvitesItem