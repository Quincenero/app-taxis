import { Car, Fuel } from "lucide-react";

import styles from "./RecentMovements.module.css";
import { formatCurrency } from "../../../utils/formatCurrency";


function RecentMovements({ movements }) {
  
  return (
    <section className={styles.container}>

      <h2 className={styles.title}>
        Últimos movimientos
      </h2>


      <div className={styles.list}>

        {movements.map((movement) => {
          console.log(movement.amount);
          const isTrip = movement.type === "trip";

          const Icon = isTrip ? Car : Fuel;


          return (
            <article
              key={movement.id}
              className={styles.item}
            >

              <div className={styles.icon}>
                <Icon size={22} />
              </div>


              <div className={styles.info}>
                <span>
                  {movement.title}
                </span>

                <small>
                  {isTrip ? "Viaje" : "Gasto"}
                </small>
                <small>
                  {movement.date}
                </small>
              </div>


              <strong
                className={
                  isTrip
                    ? styles.income
                    : styles.expense
                }
              >
                {isTrip ? "+" : "-"}
                {formatCurrency(
                  Math.abs(movement.amount)
                )}
              </strong>

            </article>
          );
        })}

      </div>

    </section>
  );
}

export default RecentMovements;