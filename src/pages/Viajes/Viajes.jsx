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


  const handleSave = (newTrip) => {

    setTrips([
      ...trips,
      newTrip,
    ]);
    toast.success("🚕 Viaje registrado correctamente");
    navigate("/")
  };


  return (
    <section className={styles.container}>

      <PageHeader
        title="Viajes"
        subtitle="Registrá y administrá tus viajes diarios."
      />


      <TripForm
        onSave={handleSave}
      />

      <TripList
        trips={trips}
      />

    </section>
  );
}


export default Viajes;