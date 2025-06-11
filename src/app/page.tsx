import styles from "./page.module.css";

export default function Page() {
  return (
    <div className={styles.page}>
      <form>
        <label>
          Dataset:
          <input type="file" name="dataset" />
        </label>
        <br />
        <label>
          Title:
          <input type="text" name="title" />
        </label>
      </form>
    </div>
  );
}
