import { useState } from "react";

import {
  getData,
  saveData,
} from "../services/storageService";


function useLocalStorage(key) {

  const [data, setData] = useState(
    () => getData(key)
  );


  const updateData = (newData) => {

    setData(newData);

    saveData(
      key,
      newData
    );

  };


  return [
    data,
    updateData,
  ];
}


export default useLocalStorage;