import ButtonComponent from "@/components/button/button.component";
import IconButtonComponent from "@/components/icon-button/icon-button.component";

import styles from "./page.module.css";

export default function Page() {
  return (
    <div className={styles.page}>
      Hello, friend!
      <br />
      <br />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: 10,
        }}
      >
        <IconButtonComponent
          color={"primary"}
          name={"mail"}
        ></IconButtonComponent>
        <IconButtonComponent
          color={"inherit"}
          name={"mail"}
        ></IconButtonComponent>
        <IconButtonComponent
          color={"error"}
          name={"mail"}
        ></IconButtonComponent>
        <IconButtonComponent
          color={"warning"}
          name={"mail"}
        ></IconButtonComponent>
        <IconButtonComponent
          color={"success"}
          name={"mail"}
        ></IconButtonComponent>
        <IconButtonComponent color={"info"} name={"mail"}></IconButtonComponent>
        <IconButtonComponent
          color={"info"}
          name={"mail"}
          disabled
        ></IconButtonComponent>
      </div>
      <br />
      <br />
      <br />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: 10,
        }}
      >
        <ButtonComponent variant={"contained"} color={"inherit"} size={"small"}>
          inherit
        </ButtonComponent>
        <ButtonComponent
          variant={"contained"}
          color={"primary"}
          endIcon={"mail"}
        >
          Primary
        </ButtonComponent>
        <ButtonComponent variant={"contained"} color={"info"}>
          Info
        </ButtonComponent>
        <ButtonComponent variant={"contained"} color={"success"}>
          Success
        </ButtonComponent>
        <ButtonComponent variant={"contained"} color={"warning"}>
          Warning
        </ButtonComponent>
        <ButtonComponent
          variant={"contained"}
          color={"error"}
          startIcon={"mail"}
        >
          Error
        </ButtonComponent>
        <ButtonComponent variant={"contained"} disabled>
          Disable
        </ButtonComponent>
      </div>
      <br />
      <br />
      <br />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: 10,
        }}
      >
        <ButtonComponent variant={"outlined"} color={"inherit"} size={"large"}>
          inherit
        </ButtonComponent>

        <ButtonComponent variant={"outlined"} color={"primary"}>
          Primary
        </ButtonComponent>

        <ButtonComponent variant={"outlined"} color={"info"}>
          Info
        </ButtonComponent>

        <ButtonComponent variant={"outlined"} color={"success"}>
          Success
        </ButtonComponent>

        <ButtonComponent variant={"outlined"} color={"warning"}>
          Warning
        </ButtonComponent>

        <ButtonComponent variant={"outlined"} color={"error"}>
          Error
        </ButtonComponent>

        <ButtonComponent variant={"outlined"} disabled>
          Disable
        </ButtonComponent>
      </div>
      <br />
      <br />
      <br />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: 10,
        }}
      >
        <ButtonComponent variant={"text"} color={"inherit"} size={"small"}>
          inherit
        </ButtonComponent>
        <ButtonComponent variant={"text"} color={"primary"}>
          Primary
        </ButtonComponent>
        <ButtonComponent variant={"text"} color={"info"}>
          Info
        </ButtonComponent>
        <ButtonComponent variant={"text"} color={"success"}>
          Success
        </ButtonComponent>
        <ButtonComponent variant={"text"} color={"warning"}>
          Warning
        </ButtonComponent>
        <ButtonComponent variant={"text"} color={"error"}>
          Error
        </ButtonComponent>
        <ButtonComponent variant={"text"} disabled>
          Disable
        </ButtonComponent>
      </div>
    </div>
  );
}
