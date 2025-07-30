"use client";

import { ReactNode, useState } from "react";

import clsx from "clsx";

import styles from "./page.module.css";

export default function Page(): ReactNode {
  const [showSidebar, setShowSidebar] = useState(true);

  function toggleSidebar() {
    setShowSidebar(!showSidebar);
  }

  return (
    <div className={styles["pipeline-page"]}>
      <nav>Navbar</nav>
      <div className={clsx(styles.sidebar, !showSidebar && styles.closed)}>
        Sidebar
        <button onClick={() => toggleSidebar()}>
          {showSidebar ? "<" : ">"}
        </button>
      </div>
      <main>Main Content</main>
    </div>
  );
}
