const saveData = (key, data) => {
  localStorage.setItem(
    key,
    JSON.stringify(data)
  );
};


const getData = (key) => {
  const data = localStorage.getItem(key);

  return data
    ? JSON.parse(data)
    : [];
};


const removeData = (key) => {
  localStorage.removeItem(key);
};


export {
  saveData,
  getData,
  removeData,
};