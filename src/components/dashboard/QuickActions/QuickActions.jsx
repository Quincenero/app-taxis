import { Car, Fuel } from "lucide-react";
import styles from "./QuickActions.module.css";
import { useNavigate } from "react-router-dom";

function QuickActions() {
  const navigate = useNavigate();

  return (
    <section className={styles.container}>

      <button 
        className={styles.button}
        onClick={() => navigate("/viajes")}
      >
        
        <Car size={24} />

        <span>
          Nuevo viaje
        </span>
      </button>


      <button 
        className={styles.button}
        onClick={() => navigate("/gastos")}
      >
        <Fuel size={24} />

        <span>
          Nuevo gasto
        </span>
      </button>

    </section>
  );
}

export default QuickActions;