import { useEffect, useState } from "react";
import { PAYMENT_METHODS } from "../../../constants/paymentMethods";
import Button from "../../common/Button/Button";
import styles from "./TripForm.module.css";

const createEmptyForm = () => ({
  date: new Date().toISOString().split("T")[0],
  origin: "",
  destination: "",
  amount: "",
  paymentMethod: "Efectivo",
  notes: "",
});

function TripForm({ onSave, trip }) {
  const [form, setForm] = useState(trip || createEmptyForm());

  useEffect(() => {
    setForm(trip || createEmptyForm());
  }, [trip]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: name === "amount" ? Math.floor(Number(value)) : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const tripData = {
      ...form,
      amount: Number(form.amount),
    };

    onSave(tripData);

    setForm(createEmptyForm());
  };

  return (
    <form
      className={styles.form}
      onSubmit={handleSubmit}
    >
      <h2>
        {trip ? "Editar viaje" : "Nuevo viaje"}
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

      <Button type="submit">
        {trip ? "Actualizar viaje" : "Guardar viaje"}
      </Button>
    </form>
  );
}

export default TripForm;