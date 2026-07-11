import TripCard from "../TripCard/TripCard";

import styles from "./TripList.module.css";


function TripList({ 
  trips,
  onEdit,
  onDelete,
 }) {

  return (
    <section className={styles.container}>

      <h2 className={styles.title}>
        Últimos viajes
      </h2>


      {
        trips.length === 0 ? (

          <p className={styles.empty}>
            No hay viajes registrados
          </p>

        ) : (

          <div className={styles.list}>

            {
              trips.map((trip) => (

                <TripCard
                  key={trip.id}
                  trip={trip}
                  onEdit={onEdit}
                  onDelete={onDelete}
                />

              ))
            }

          </div>

        )
      }


    </section>
  );
}


export default TripList;