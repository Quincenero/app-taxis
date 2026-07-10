import useLocalStorage from "../../hooks/useLocalStorage";
import { STORAGE_KEYS } from "../../constants/appConfig";

import TripForm from "../../components/trips/TripForm/TripForm";
import TripList from "../../components/trips/TripList/TripList";
import PageHeader from "../../components/common/PageHeader/PageHeader";

function Viajes() {

  const [trips, setTrips] = useLocalStorage(
    STORAGE_KEYS.TRIPS
  );


  const handleSave = (newTrip) => {

    setTrips([
      ...trips,
      newTrip,
    ]);

  };


  return (
    <section>

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