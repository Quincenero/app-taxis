import { Car, Fuel } from "lucide-react";

import styles from "./QuickActions.module.css";


function QuickActions() {
  return (
    <section className={styles.container}>

      <button className={styles.button}>
        <Car size={24} />

        <span>
          Nuevo viaje
        </span>
      </button>


      <button className={styles.button}>
        <Fuel size={24} />

        <span>
          Nuevo gasto
        </span>
      </button>

    </section>
  );
}

export default QuickActions;