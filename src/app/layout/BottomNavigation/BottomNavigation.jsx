import { NavLink } from "react-router-dom";

import {
  Home,
  Car,
  Fuel,
  BarChart3,
  Settings,
} from "lucide-react";

import styles from "./BottomNavigation.module.css";


const menuItems = [
  {
    name: "Inicio",
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
    name: "Config",
    path: "/configuracion",
    icon: Settings,
  },
];


function BottomNavigation() {
  return (
    <nav className={styles.navigation}>
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
  );
}

export default BottomNavigation;