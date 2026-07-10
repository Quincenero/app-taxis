import ExpenseCard from "../ExpenseCard/ExpenseCard";

import styles from "./ExpenseList.module.css";


function ExpenseList({ expenses }) {

  return (
    <section className={styles.container}>

      <h2 className={styles.title}>
        Últimos gastos
      </h2>


      {
        expenses.length === 0 ? (

          <p className={styles.empty}>
            No hay gastos registrados
          </p>

        ) : (

          <div className={styles.list}>

            {
              expenses.map((expense) => (

                <ExpenseCard
                  key={expense.id}
                  expense={expense}
                />

              ))
            }

          </div>

        )
      }


    </section>
  );
}


export default ExpenseList;