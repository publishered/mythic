import styles from './ModalInputGroup.module.css'

const ModalInputGroup = ({label, type, onInput, value}) => {
   return <div className={styles['signUp__form-group']}>
      <label className={styles['signUp__form-group-label']}>
         <span className={styles['signUp__form-group-text']}>{label}</span>
         <input value={value} onInput={onInput} className={styles['signUp__form-group-input']} type={type} />
      </label>
   </div>
}

export default ModalInputGroup