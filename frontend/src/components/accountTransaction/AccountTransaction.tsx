import classNames from "classnames"
import { AccountTransactionProps } from "../../../type"
import styles from "./accountTransaction.module.scss"

const AccountTransaction: React.FC<AccountTransactionProps> = ({ accountTitle, accountAmount, accountAmountDescription }) => {
    return (
        <section className={styles.account}>
            <div className={styles.content}>
                <h3 className={styles.title}>{accountTitle}</h3>
                <p className={styles.amount}>{accountAmount}</p>
                <p className={styles.description}>{accountAmountDescription}</p>
            </div>
            <div className={classNames(styles.ol)}>
                <button className={styles.button}>View transactions</button>
            </div>
        </section>
    )
}

export default AccountTransaction