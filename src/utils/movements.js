export function getRecentMovements(trips, expenses) {

  const tripMovements = trips.map((trip) => ({
    id: trip.id,
    type: "trip",
    title: trip.description,
    date: trip.date,
    amount: trip.amount,
  }));


  const expenseMovements = expenses.map((expense) => ({
    id: expense.id,
    type: "expense",
    title: expense.description,
    date: expense.date,
    amount: expense.amount,
  }));


  return [
    ...tripMovements,
    ...expenseMovements,
  ]
  .sort(
    (a, b) =>
      new Date(b.date) - new Date(a.date)
  )
  .slice(0, 5);

}