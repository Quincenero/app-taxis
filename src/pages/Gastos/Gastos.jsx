import useLocalStorage from "../../hooks/useLocalStorage";

import { STORAGE_KEYS } from "../../constants/appConfig";

import ExpenseForm from "../../components/expenses/ExpenseForm/ExpenseForm";

import ExpenseList from "../../components/expenses/ExpenseList/ExpenseList";

import PageHeader from "../../components/common/PageHeader/PageHeader";

function Gastos() {

  const [expenses, setExpenses] = useLocalStorage(
    STORAGE_KEYS.EXPENSES
  );


  const handleSave = (newExpense) => {

    setExpenses([
      ...expenses,
      newExpense,
    ]);

  };


  return (
    <section>

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