import Image from 'next/image'
import styles from './ProfilePageNoItems.module.css'

const ProfilePageNoItems = ({src, title, text, nickname}) => {
   return <div className={styles.inner}>
      <Image
         className={styles.img}
         src={src}
         width="40"
         height="40"
         alt='icon'
      />
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.text}><b>{nickname}</b> {text}</p>
   </div>
}

export default ProfilePageNoItems