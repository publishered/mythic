import DefaultButton from '@/components/UI/defaultButton/DefaultButton'
import Image from 'next/image'
import styles from './MatchMakingCard.module.css'

const MatchMakingCard = ({title, mode, maps, src, onClick}) => {
   return <div className={styles.card}>
      <div className={styles['card__image-wrapper']}>
         <Image 
            className={styles['card__image']}
            src={src}
            width="394"
            height="300"
            quality={100}
            alt={`${title} - ${mode}`} 
         />
      </div>
      <div className={styles['card__info']}>
         <span className={styles['card__mode']}>{mode}</span>
         <h2 className={styles['card__title']}>{title}</h2>
         <p className={styles['card__maps']}>{maps}</p>
         <DefaultButton className={styles.card__btn} onClick={onClick}>
            Join now
         </DefaultButton>
      </div>
   </div>
}

export default MatchMakingCard