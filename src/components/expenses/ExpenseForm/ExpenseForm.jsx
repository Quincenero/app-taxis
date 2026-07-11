import { useState } from "react";
import { EXPENSE_CATEGORIES } from "../../../constants/expenseCategories";
import { PAYMENT_METHODS } from "../../../constants/paymentMethods";
import styles from "./ExpenseForm.module.css";
import Button from "../../common/Button/Button";

function ExpenseForm({ onSave }) {
  const today = new Date().toISOString().split("T")[0];

  const [form, setForm] = useState({
    date: today,
    category: "Combustible",
    description: "",
    amount: "",
    paymentMethod: "Efectivo",
  });


  const handleChange = (e) => {

    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });

  };


  const handleSubmit = (e) => {

    e.preventDefault();


    const newExpense = {
      id: Date.now(),

      ...form,

      amount: Number(form.amount),
    };


    onSave(newExpense);


    setForm({
      date: new Date().toISOString().split("T")[0],
      category: "Combustible",
      description: "",
      amount: "",
      paymentMethod: "Efectivo",
    });

  };


  return (
    <form
      className={styles.form}
      onSubmit={handleSubmit}
    >

      <h2>
        Nuevo gasto
      </h2>


      <input
        type="date"
        name="date"
        value={form.date}
        onChange={handleChange}
        required
      />


      <select
        name="category"
        value={form.category}
        onChange={handleChange}
      >

        {
          EXPENSE_CATEGORIES.map((category) => (
            <option
              key={category}
              value={category}
            >
              {category}
            </option>
          ))
        }

      </select>


      <input
        type="text"
        name="description"
        placeholder="Descripción"
        value={form.description}
        onChange={handleChange}
        required
      />


      <input
        type="number"
        name="amount"
        placeholder="Importe"
        value={form.amount}
        onChange={handleChange}
        required
      />


      <select
        name="paymentMethod"
        value={form.paymentMethod}
        onChange={handleChange}
      >

        {
          PAYMENT_METHODS.map((method) => (
            <option
              key={method}
              value={method}
            >
              {method}
            </option>
          ))
        }

      </select>


      <Button type="submit">
        Guardar gasto
      </Button>


    </form>
  );
}


export default ExpenseForm;