import { useState } from "react";
import useLocalStorage from "../../hooks/useLocalStorage";
import { STORAGE_KEYS } from "../../constants/appConfig";
import TripForm from "../../components/trips/TripForm/TripForm";
import TripList from "../../components/trips/TripList/TripList";
import PageHeader from "../../components/common/PageHeader/PageHeader";
import { useNavigate } from "react-router-dom";
import styles from "../Page.module.css";

import { toast } from "react-toastify";


function Viajes() {

  const navigate = useNavigate();
  const [trips, setTrips] = useLocalStorage(
    STORAGE_KEYS.TRIPS
  );

  const [editingTrip, setEditingTrip] = useState(null);

  const handleSave = (tripData) => {

      if (editingTrip) {

        setTrips(
          trips.map((item) =>
            item.id === editingTrip.id
              ? {
                  ...tripData,
                  id: editingTrip.id,
                }
              : item
          )
        );

        toast.success("🚕 Viaje actualizado correctamente");
        setEditingTrip(null);

      } else {

        setTrips([
          ...trips,
          {
            ...tripData,
            id: Date.now(),
          },
        ]);

        toast.success("🚕 Viaje registrado correctamente");

      }

  navigate("/");
  };

  const handleEdit = (trip) => {
  setEditingTrip(trip);
  };

  const handleDelete = (id) => {

    const confirmDelete = window.confirm(
      "¿Deseas eliminar este viaje?"
    );

    if (!confirmDelete) return;

    setTrips(
      trips.filter((trip) => trip.id !== id)
    );

    toast.success("🗑️ Viaje eliminado correctamente");

  };

  return (
    <section className={styles.container}>

      <PageHeader
        title="Viajes"
        subtitle="Registrá y administrá tus viajes diarios."
      />


      <TripForm
        onSave={handleSave}
        trip={editingTrip}
      />

      <TripList
        trips={trips}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />

    </section>
  );
}


export default Viajes;