

import styles from './radio.module.css'
export default function RadioComponent (): ReactElement {
    return(
        <input type="radio" className={styles.radio} />
    )
}