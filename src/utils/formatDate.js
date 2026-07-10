export function formatDate(date) {

  return new Intl.DateTimeFormat("es-AR").format(
    new Date(date)
  );

}