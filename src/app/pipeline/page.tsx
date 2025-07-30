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
      <nav>This is nav</nav>
      <div className={clsx(styles.sidebar, !showSidebar && styles.closed)}>
        <button onClick={() => toggleSidebar()}>
          {showSidebar ? "<" : ">"}
        </button>
      </div>
      <footer>This is footer</footer>
    </div>
  );
}
