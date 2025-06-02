import Link from "next/link";

import TypographyComponent from "@/components/typography/typography.component";

import AvatarComponent from "../avatar/avatar.component";
import ButtonComponent from "../button/button.component";
import IconComponent from "../icon/icon.component";

import styles from "./hero.module.css";

export default function HeroComponent() {
  return (
    <div className={styles.page}>
      <TypographyComponent variant="h2" color="text-disabled">
        <span>Lorem ipsum dolor sit</span>
      </TypographyComponent>

      <TypographyComponent variant="h2">
        Neque doloribus
        <span className={styles.title}> pipelyze</span>
      </TypographyComponent>

      <TypographyComponent variant="subtitle1">
        The starting point for your next project is based on MUI. Easy
        <br />
        customization helps you build apps faster and better.
      </TypographyComponent>

      <div className={styles["avatar-container"]}>
        <div className={styles.avatar}>
          <AvatarComponent name="Bijan" size={2} />
          <AvatarComponent name="Yasaman" size={2} />
          <AvatarComponent name="Negar" size={2} />
        </div>
        <TypographyComponent variant="subtitle2">
          160+ Happy customers
        </TypographyComponent>
      </div>

      <div className={styles["btn-container"]}>
        <ButtonComponent color="secondary">
          <IconComponent name="bling-line" />
          <TypographyComponent variant="button">
            Live Preview
          </TypographyComponent>
        </ButtonComponent>
        <ButtonComponent color="secondary">
          <IconComponent name="figma-line" />
          <TypographyComponent variant="button">
            Figma Preview
          </TypographyComponent>
        </ButtonComponent>
      </div>

      <div className={styles.link}>
        <TypographyComponent variant="subtitle2">
          <Link href="/">
            <IconComponent name="external-link-line" />
            Get free version
          </Link>
        </TypographyComponent>
      </div>

      <div>
        <TypographyComponent variant="overline" color="text-disabled">
          AVAILABLE FOR
        </TypographyComponent>
      </div>

      <div>
        <IconComponent name="home-1-line" />
        <IconComponent name="home-1-line" />
        <IconComponent name="home-1-line" />
        <IconComponent name="home-1-line" />
      </div>
    </div>
  );
}
