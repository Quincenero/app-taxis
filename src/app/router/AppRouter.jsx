import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "../layout/MainLayout";

import Dashboard from "../../pages/Dashboard/Dashboard";
import Viajes from "../../pages/Viajes/Viajes";
import Gastos from "../../pages/Gastos/Gastos";
import Resumen from "../../pages/Resumen/Resumen";
import Estadisticas from "../../pages/Estadisticas/Estadisticas";
import Configuracion from "../../pages/Configuracion/Configuracion";
import NotFound from "../../pages/NotFound/NotFound";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/viajes" element={<Viajes />} />
          <Route path="/gastos" element={<Gastos />} />
          <Route path="/resumen" element={<Resumen />} />
          <Route path="/estadisticas" element={<Estadisticas />} />
          <Route path="/configuracion" element={<Configuracion />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;