import { Car, Fuel } from "lucide-react";

import styles from "./RecentMovements.module.css";


const movements = [
  {
    id: 1,
    type: "viaje",
    description: "Viaje al centro",
    amount: 2500,
  },
  {
    id: 2,
    type: "gasto",
    description: "Carga de combustible",
    amount: -8000,
  },
  {
    id: 3,
    type: "viaje",
    description: "Viaje a terminal",
    amount: 1800,
  },
];


function RecentMovements() {
  return (
    <section className={styles.container}>

      <h2 className={styles.title}>
        Últimos movimientos
      </h2>


      <div className={styles.list}>

        {movements.map((movement) => {

          const isTrip = movement.type === "viaje";

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
                  {movement.description}
                </span>

                <small>
                  {isTrip ? "Viaje" : "Gasto"}
                </small>
              </div>


              <strong
                className={
                  isTrip
                    ? styles.income
                    : styles.expense
                }
              >
                {isTrip ? "+" : ""}
                ${Math.abs(movement.amount)}
              </strong>

            </article>
          );
        })}

      </div>

    </section>
  );
}

export default RecentMovements;