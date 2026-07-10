import { Car } from "lucide-react";

import styles from "./TripCard.module.css";
import { formatCurrency } from "../../../utils/formatCurrency";
import { formatDate } from "../../../utils/formatDate";


function TripCard({ trip }) {

  return (
    <article className={styles.card}>

      <div className={styles.header}>

        <div className={styles.icon}>
          <Car size={22} />
        </div>


        <div>
          <h3>
            {trip.origin} → {trip.destination}
          </h3>

          <span>
            {formatDate(trip.date)}
          </span>
        </div>

      </div>


      <div className={styles.details}>

        <span>
          💳 {trip.paymentMethod}
        </span>


        <strong>
          {formatCurrency(trip.amount)}
        </strong>

      </div>


      {
        trip.notes && (
          <p className={styles.notes}>
            {trip.notes}
          </p>
        )
      }

    </article>
  );
}


export default TripCard;