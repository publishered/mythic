import GrayTransparentButton from '../grayTransparentButton/GrayTransparentButton'
import styles from './LoadMore.module.css'

const LoadMore = ({onClick}) => {
   return <GrayTransparentButton onClick={onClick} className={styles.load__more}>
      load more
   </GrayTransparentButton>
}

export default LoadMore