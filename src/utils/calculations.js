export function calculateIncome(trips) {

  return trips.reduce(
    (total, trip) => total + trip.amount,
    0
  );

}


export function calculateTripsCount(trips) {

  return trips.length;

}


export function calculateAverageTrip(trips) {

  if (trips.length === 0) {
    return 0;
  }


  return calculateIncome(trips) / trips.length;

}


export function calculateExpenses(expenses) {

  return expenses.reduce(
    (total, expense) => total + expense.amount,
    0
  );

}


export function calculateBalance(trips, expenses) {

  const income = calculateIncome(trips);

  const costs = calculateExpenses(expenses);


  return income - costs;

}