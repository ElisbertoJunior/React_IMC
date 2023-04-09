import styles from './Result.module.css'

const Result = ({showResult}) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h3>Resultado:</h3>
        <p>{showResult}</p>
      </div>
    </div>
  )
}

export default Result