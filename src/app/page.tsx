import HeroComponent from "@/components/hero/hero.component";
import TransferListComponent from "@/components/transfer-lis/transfer-list-component";

import { ListItem } from "@/types/list-item..type";

import styles from "./page.module.css";

export default function Page() {
  const item1 = [
    { id: "1", name: "list one" },
    { id: "2", name: "list 2 " },
    { id: "3", name: "list three" },
    { id: "4", name: "list 4 " },
  ];
  const item2: ListItem[] = [];
  return (
    <div className={styles.page}>
      <TransferListComponent items1={item1} items2={item2} />
      {/* <HeroComponent /> */}
    </div>
  );
}
