import useLocalStorage from "../../hooks/useLocalStorage";
import { STORAGE_KEYS } from "../../constants/appConfig";
import ExpenseForm from "../../components/expenses/ExpenseForm/ExpenseForm";
import ExpenseList from "../../components/expenses/ExpenseList/ExpenseList";
import PageHeader from "../../components/common/PageHeader/PageHeader";
import { useNavigate } from "react-router-dom";
import styles from "../Page.module.css";

import { toast } from "react-toastify";

function Gastos() {

  const navigate = useNavigate();
  const [expenses, setExpenses] = useLocalStorage(
    STORAGE_KEYS.EXPENSES
  );


  const handleSave = (newExpense) => {

    setExpenses([
      ...expenses,
      newExpense,
    ]);
    toast.success("⛽ Gasto registrado correctamente");

    navigate("/");
  };


  return (
    <section className={styles.container}>

      <PageHeader
        title="Gastos"
        subtitle="Registrá y controlá tus gastos."
      />

      <ExpenseForm
        onSave={handleSave}
      />

      <ExpenseList
        expenses={expenses}
      />

    </section>
  );
}


export default Gastos;