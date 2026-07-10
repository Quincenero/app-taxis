import {
  DollarSign,
  Fuel,
  TrendingUp,
  Car,
} from "lucide-react";

import SummaryCard from "../../components/dashboard/SummaryCard/SummaryCard";

import styles from "./Dashboard.module.css";
import QuickActions from "../../components/dashboard/QuickActions/QuickActions";
import RecentMovements from "../../components/dashboard/RecentMovements/RecentMovements";
import useLocalStorage from "../../hooks/useLocalStorage";

import { STORAGE_KEYS } from "../../constants/appConfig";

import {
  calculateIncome,
  calculateTripsCount,
  calculateExpenses,
  calculateBalance,
} from "../../utils/calculations";

import { formatCurrency } from "../../utils/formatCurrency";
import PageHeader from "../../components/common/PageHeader/PageHeader";

import { getRecentMovements } from "../../utils/movements";

function Dashboard() {

  const [trips] = useLocalStorage(
  STORAGE_KEYS.TRIPS
  );

  const [expenses] = useLocalStorage(
    STORAGE_KEYS.EXPENSES
  );


  const income = calculateIncome(trips);

  const tripsCount = calculateTripsCount(trips);

  const expensesTotal = calculateExpenses(expenses);

  const balance = calculateBalance(
    trips,
    expenses
  );

  const movements = getRecentMovements(
    trips,
    expenses
  );
  
  return (
    <section className={styles.container}>

      <PageHeader
        title="Dashboard"
        subtitle="Resumen general de tu actividad"
      />

      <div className={styles.cards}>

        <SummaryCard
          title="Ingresos"
          value={formatCurrency(income)}
          icon={DollarSign}
          color="#16a34a"
        />


        <SummaryCard
          title="Gastos"
          value={formatCurrency(expensesTotal)}
          icon={Fuel}
          color="#dc2626"
        />


        <SummaryCard
          title="Ganancia"
          value={formatCurrency(balance)}
          icon={TrendingUp}
          color="#2563eb"
        />


        <SummaryCard
          title="Viajes"
          value={tripsCount}
          icon={Car}
          color="#f59e0b"
        />

      </div>

      <QuickActions />

      <RecentMovements
        movements={movements}
      />

    </section>
  );
}

export default Dashboard;