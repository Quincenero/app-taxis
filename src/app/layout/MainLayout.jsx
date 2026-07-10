import { Outlet } from "react-router-dom";

import Header from "./Header/Header";
import Sidebar from "./Sidebar/Sidebar";
import BottomNavigation from "./BottomNavigation/BottomNavigation";

import styles from "./MainLayout.module.css";

function MainLayout() {
  return (
    <div className={styles.container}>
      <Header />

      <div className={styles.body}>
        <Sidebar />

        <main className={styles.content}>
          <Outlet />
        </main>
      </div>

      <BottomNavigation />
    </div>
  );
}

export default MainLayout;