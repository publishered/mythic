import DefaultButton from '@/components/UI/defaultButton/DefaultButton'
import Modal from '@/components/UI/modal/Modal'
import Image from 'next/image'
import styles from './Premium.module.css'
import PremiumPlans from './premiumPlans/PremiumPlans'

const Premium = ({isPrimeOpen, setIsPrimeOpen}) => {
   return <Modal isModalOpen={isPrimeOpen} setIsModalOpen={setIsPrimeOpen}>
      <div className={styles.premium}>
         <Image 
            src="/images/icon/prime.svg"
            className={styles.premium__icon} 
            alt='upgrade prime'
            width="58"
            height="58"
         />
         <h2 className={styles.premium__title}>Upgrade to Premium</h2>
         <p className={styles.premium__text}>
            Plans start at only $4.49/month. Cancel anytime.
         </p>
         <div className={styles.premium__benefits}>
            <h3 className={styles['premium__benefits-text']}>
               Benefits
            </h3>
            <ul className={styles['premium__benefits-list']}>
               <BenefitsItem 
                  width="18"
                  height="18"
                  alt="users"
                  src="/images/icon/users.svg"
                  title="Enhanced profile"
                  text="Stand out from the crowd with an exclusive badge and profile frame."
               />
               <BenefitsItem 
                  width="18"
                  height="18"
                  alt="users"
                  src="/images/icon/stats.svg"
                  title="Advanced stats"
                  text="Learn more about your opponents and track your own performance."
               />
               <BenefitsItem 
                  width="18"
                  height="18"
                  alt="users"
                  src="/images/icon/rocket.svg"
                  title="Priority support"
                  text="Enjoy priority live support from our admins and community managers."
               />
            </ul>
         </div>
         <PremiumPlans />
         <DefaultButton className={styles.premium__btn} disabled={true}>
            Continue
         </DefaultButton>
         <p className={styles.premium__subtext}>Your account cannot be funded until it is verified.</p>
      </div>
   </Modal>
}


const BenefitsItem = ({width, height, src, alt, title, text}) => {
   return <li className={styles['premium__benefits-item']}>
      <Image
         src={src}
         width={width}
         height={height}
         className={styles['premium__benefits-item-icon']} 
         alt={alt}
      />
      <div className={styles['premium__benefits-item-info']}>
         <h4 className={styles['premium__benefits-item-title']}>{title}</h4>
         <p className={styles['premium__benefits-item-text']}>
            {text}
         </p>
      </div>
   </li>
}

export default Premium