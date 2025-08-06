"use client";

import { ReactNode, useState } from "react";

import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";

import clsx from "clsx";

import ButtonComponent from "@/components/button/button.component";

import styles from "./page.module.css";

export default function Page(): ReactNode {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);

  const toggleSidebar = (): void => {
    setIsCollapsed((old) => !old);
  };

  return (
    <div className={clsx(styles.page, isCollapsed && styles.collapsed)}>
      <div className={styles.toolbar}>Toolbar</div>
      <div className={clsx(styles.sidebar)}>Sidebar</div>
      <ButtonComponent
        className={styles.toggle}
        variant="text"
        color="inherit"
        size="small"
        onClick={() => toggleSidebar()}
      >
        {isCollapsed ? "<" : ">"}
      </ButtonComponent>
      <PanelGroup className={styles.panels} direction="vertical">
        <Panel minSize={20}>
          <div className={styles.pipeline}>Pipeline</div>
        </Panel>
        <PanelResizeHandle />
        <Panel minSize={20}>
          <div className={styles.preview}>Preview</div>
        </Panel>
      </PanelGroup>
    </div>
  );
}
