import DefaultButtonWithState from '@/components/UI/defaultButtonWithState/DefaultButtonWithState'
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
         <DefaultButtonWithState
            className={styles.card__btn}
            onClick={onClick}
            steamMsg={<>You can't play until you connect your<br/></>}
            verifyMsg={"You cannot play until your account is verified."}
         >
            Join now
         </DefaultButtonWithState>
      </div>
   </div>
}

export default MatchMakingCard