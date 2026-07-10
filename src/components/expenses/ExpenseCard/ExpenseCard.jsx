import { Fuel } from "lucide-react";

import styles from "./ExpenseCard.module.css";
import { formatCurrency } from "../../../utils/formatCurrency";
import { formatDate } from "../../../utils/formatDate";


function ExpenseCard({ expense }) {

  return (
    <article className={styles.card}>

      <div className={styles.header}>

        <div className={styles.icon}>
          <Fuel size={22} />
        </div>


        <div>

          <h3>
            {expense.category}
          </h3>

          <span>
            {expense.description}
          </span>

        </div>

      </div>


      <div className={styles.details}>

        <div>

          <p>
           📅 {formatDate(expense.date)}
          </p>


          <p>
            💳 {expense.paymentMethod}
          </p>

        </div>


        <strong>
          {formatCurrency(expense.amount)}
        </strong>

      </div>


    </article>
  );
}


export default ExpenseCard;