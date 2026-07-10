import { NavLink } from "react-router-dom";
import {
  Home,
  Car,
  Fuel,
  BarChart3,
  Settings,
  TrendingUp,
} from "lucide-react";

import styles from "./Sidebar.module.css";

const menuItems = [
  {
    name: "Dashboard",
    path: "/",
    icon: Home,
  },
  {
    name: "Viajes",
    path: "/viajes",
    icon: Car,
  },
  {
    name: "Gastos",
    path: "/gastos",
    icon: Fuel,
  },
  {
    name: "Resumen",
    path: "/resumen",
    icon: BarChart3,
  },
  {
    name: "Estadísticas",
    path: "/estadisticas",
    icon: TrendingUp,
  },
  {
    name: "Configuración",
    path: "/configuracion",
    icon: Settings,
  },
];

function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <nav className={styles.menu}>
        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                isActive
                  ? `${styles.link} ${styles.active}`
                  : styles.link
              }
            >
              <Icon size={20} />
              <span>{item.name}</span>
            </NavLink>
          );
        })}
      </nav>
    </aside>
  );
}

export default Sidebar;