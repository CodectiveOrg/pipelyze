"use client";

import { ReactNode, useState } from "react";

import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";

import clsx from "clsx";

import styles from "./page.module.css";

export default function Page(): ReactNode {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(true);

  const toggleSidebar = (): void => {
    setIsSidebarOpen((old) => !old);
  };

  return (
    <div
      className={clsx(
        styles["pipeline-page"],
        !isSidebarOpen && styles["closed-sidebar"],
      )}
    >
      <nav>Navbar</nav>
      <div className={clsx(styles.sidebar)}>
        <button onClick={() => toggleSidebar()}>
          {isSidebarOpen ? "<" : ">"}
        </button>
      </div>
      <main>
        <PanelGroup direction={"vertical"}>
          <Panel>
            <div className={styles["pipeline-section"]}>
              It is pipeline section
            </div>
          </Panel>
          <PanelResizeHandle className={styles["line-in-between"]} />
          <Panel>
            <div className={styles["preview"]}>It is preview</div>
          </Panel>
        </PanelGroup>
      </main>
    </div>
  );
}
