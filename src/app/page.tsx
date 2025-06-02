import AvatarComponent from "@/components/avatar/avatar.component";

import styles from "./page.module.css";

export default function Page() {
  return (
    <div className={styles.page}>
      Hello, friend!
      <div>
        <AvatarComponent name="A" />
        <AvatarComponent name="Bijan Eisapour" />
        <AvatarComponent name="C" variant="rounded" />
        <AvatarComponent name="D" variant="square" />
        <AvatarComponent name="E" size={2} />
        <AvatarComponent name="F" size={1.5} />
        <AvatarComponent name="G" size={1} />
      </div>
    </div>
  );
}
