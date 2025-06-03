import Image from "next/image";
import Link from "next/link";

import TypographyComponent from "@/components/typography/typography.component";

import AvatarComponent from "../avatar/avatar.component";
import ButtonComponent from "../button/button.component";
import IconComponent from "../icon/icon.component";

import styles from "./hero.module.css";

export default function HeroComponent() {
  return (
    <div className={styles.page}>
      <TypographyComponent variant="h1">
        Boost your building
      </TypographyComponent>

      <TypographyComponent variant="h1">
        process with
        <span className={styles.title}> Minimal</span>
      </TypographyComponent>

      <TypographyComponent variant="body1">
        The starting point for your next project is based on MUI.
        <br />
        Easy customization helps you build apps faster and better.
      </TypographyComponent>

      <div className={styles["avatar-container"]}>
        <div className={styles.avatar}>
          <AvatarComponent src="/assets/avatars/avatar-1.webp" alt="Avatar1" />
          <AvatarComponent src="/assets/avatars/avatar-2.webp" alt="Avatar2" />
          <AvatarComponent src="/assets/avatars/avatar-3.webp" alt="Avatar3" />
        </div>
        <TypographyComponent variant="subtitle2">
          160+ Happy customers
        </TypographyComponent>
      </div>

      <div className={styles["btn-container"]}>
        <ButtonComponent color="inherit">
          <IconComponent name="bling-line" className={styles.icon} />
          <TypographyComponent variant="button" color="inherit">
            Live Preview
            <br />
            <TypographyComponent
              variant="subtitle2"
              color="text-disabled"
              className={styles.version}
            >
              v7.2.0
            </TypographyComponent>
          </TypographyComponent>
        </ButtonComponent>
        <ButtonComponent color="inherit" className={styles.figma}>
          <IconComponent name="figma-line" className={styles.icon} />
          <TypographyComponent variant="button" color="text-primary">
            Figma Preview
          </TypographyComponent>
        </ButtonComponent>
      </div>

      <div className={styles.link}>
        <Link href="/">
          <IconComponent name="external-link-line" />
          Get free version
        </Link>
      </div>

      <div className={styles.available}>
        <TypographyComponent variant="overline" color="text-disabled">
          AVAILABLE FOR
        </TypographyComponent>
      </div>

      <div className={styles.logo}>
        <Image src="/assets/logo/js.svg" alt="js" width={30} height={30} />
        <Image src="/assets/logo/ts.svg" alt="ts" width={30} height={30} />
        <Image src="/assets/logo/next.svg" alt="next" width={27} height={27} />
        <Image src="/assets/logo/vite.svg" alt="vite" width={27} height={27} />
      </div>
    </div>
  );
}
