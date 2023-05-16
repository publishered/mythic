import Container from '@/components/UI/container/Container'
import Image from 'next/image'
import HomeSectionH2 from '../homeSectionH2/HomeSectionH2'
import styles from './WhatWeOffer.module.css'

const WhatWeOffer = () => {
   return <section className={styles.offer}>
      <Container>
         <div className={styles.offer__inner}>
            <HomeSectionH2>
               What we offer
            </HomeSectionH2>
            <div className={styles.offer__grid}>
               <WhatWeOfferItem 
                  src="/images/icon/present.svg"
                  title="Daily prizes"
                  text="All your hard-carrying and tower destruction will pay off. Play well and get your hands on some sweet prizes several times a day."
               />
               <WhatWeOfferItem 
                  src="/images/icon/gamepad.svg"
                  title="Fully automated"
                  text="Play daily without hassle. Advance through your bracket automatically and explore our expanded post-match stats to level up your performance."
               />
               <WhatWeOfferItem 
                  src="/images/icon/headset.svg"
                  title="Immediate support"
                  text="Run into trouble? Our support team is always available on multiple channels: Discord, email, website — to assist with and resolve any problems."
               />
            </div>
         </div>
      </Container>
   </section>
}

const WhatWeOfferItem = ({src, title, text}) => {
   return <div className={styles.offer__item}>
      <Image 
         className={styles['offer__item-image']} 
         src={src}
         width="60" height="60" 
         alt='' 
      />
      <h3 className={styles['offer__item-title']}>{title}</h3>
      <p className={styles['offer__item-text']}>{text}</p>
   </div>
}

export default WhatWeOffer