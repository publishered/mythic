import { useState } from 'react'
import styles from './PremiumPlans.module.css'

const PremiumPlans = () => {

   const [selectedPlan, setSelectedPlan] = useState(null)

   const plans = [
      {
         id: 1,
         period: '1 month',
         text: 'Renews every 30 days at $4.49',
         price: '$4.49/mo'
      },
      {
         id: 2,
         period: '3 months',
         text: 'Renews every 90 days at $11.99',
         price: '$3.99/mo',
         sale: 20
      },
      {
         id: 3,
         period: '12 months',
         text: 'Renews every 360 days at $29.99',
         price: '$2.49/mo',
         sale: 50
      },
   ]

   return <div className={styles.plans}>
      <h2 className={styles.plans__title}>Plans</h2>
      <ul className={styles.plans__list}>
         {plans.map(({period, text, price, sale, id}) => (
            <PremiumPlansItem 
               title={period}
               text={text}
               price={price}
               sale={sale}
               key={id}
               setSelectedPlan={() => setSelectedPlan(id)}
               selectedPlan={selectedPlan}
               id={id}
            />)
         )}
      </ul>
   </div>
}

const PremiumPlansItem = ({title, text, price, sale, setSelectedPlan, id, selectedPlan}) => {
   return <li className={`${styles.plans__item} ${id === selectedPlan ? styles.selected : ''}`} onClick={setSelectedPlan}>
      <div className={styles['plans__item-left']}>
         <span className={styles['plans__item-check']}></span>
         <div className={styles['plans__item-info']}>
            <div className={styles['plans__item-info-title-wrapper']}>
               <h3 className={styles['plans__item-info-title']}>{title}</h3>
               {
                  sale ? 
                  <span className={styles['plans__item-info-title-sale']}>{`save ${sale}%`}</span>
                  : ''
               }
            </div>
            <p className={styles['plans__item-info-text']}>{text}</p>
         </div>
      </div>
      <span className={styles['plans__item-price']}>{price}</span>
   </li>
}

export default PremiumPlans