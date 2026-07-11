import { useState } from "react";
import { PAYMENT_METHODS } from "../../../constants/paymentMethods";
import styles from "./TripForm.module.css";


function TripForm({ onSave }) {

  const today = new Date().toISOString().split("T")[0];
  const [form, setForm] = useState({
    date: today,
    origin: "",
    destination: "",
    amount: "",
    paymentMethod: "Efectivo",
    notes: "",
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: name === "amount" ? Number(value) :value,
    });

  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTrip = {
      id: Date.now(),
      ...form,
      amount: Number(form.amount),
    };

    onSave(newTrip);

    setForm({
      date: "T",
      origin: "",
      destination: "",
      amount: "",
      paymentMethod: "Efectivo",
      notes: "",
    });

  };


  return (
    <form
      className={styles.form}
      onSubmit={handleSubmit}
    >

      <h2>
        Nuevo viaje
      </h2>


      <input
        type="date"
        name="date"
        value={form.date}
        onChange={handleChange}
        required
      />


      <input
        type="text"
        name="origin"
        placeholder="Origen"
        value={form.origin}
        onChange={handleChange}
        required
      />


      <input
        type="text"
        name="destination"
        placeholder="Destino"
        value={form.destination}
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

        {PAYMENT_METHODS.map((method) => (
          <option
            key={method}
            value={method}
          >
            {method}
          </option>
        ))}

      </select>


      <textarea
        name="notes"
        placeholder="Notas"
        value={form.notes}
        onChange={handleChange}
      />


      <button type="submit">
        Guardar viaje
      </button>


    </form>
  );
}


export default TripForm;