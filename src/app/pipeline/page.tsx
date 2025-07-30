"use client";

import { ReactNode, useState } from "react";

import clsx from "clsx";

import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";

import styles from "./page.module.css";

export default function Page(): ReactNode {
  const [showSidebar, setShowSidebar] = useState(true);

  function toggleSidebar() {
    setShowSidebar(!showSidebar);
  }

  return (
    <div
      className={clsx(
        styles["pipeline-page"],
        !showSidebar && styles["closed-sidebar"],
      )}
    >
      <nav>Navbar</nav>
      <div className={clsx(styles.sidebar)}>
        <button onClick={() => toggleSidebar()}>
          {showSidebar ? "<" : ">"}
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
