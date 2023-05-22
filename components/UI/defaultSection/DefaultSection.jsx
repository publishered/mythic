import Container from '../container/Container'
import styles from './DefaultSection.module.css'

const DefaultSection = ({children}) => {
   return <section className={styles.section}>
      <Container>
         {children}
      </Container>
   </section>
}

export default DefaultSection