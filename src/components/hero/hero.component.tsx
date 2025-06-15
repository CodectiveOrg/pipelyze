import { Barlow } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

import clsx from "clsx";

import TypographyComponent from "@/components/typography/typography.component";

import AvatarComponent from "../avatar/avatar.component";
import ButtonComponent from "../button/button.component";
import IconComponent from "../icon/icon.component";

import styles from "./hero.module.css";

const barlow = Barlow({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export default function HeroComponent() {
  return (
    <>
      <div className={clsx(styles.circle, styles.circle1)}></div>
      <div className={clsx(styles.circle, styles.circle2)}></div>
      <div className={clsx(styles.circle, styles.circle3)}></div>
      <div className={clsx(styles.circle, styles.circle4)}></div>

      <div className={clsx(styles.page, barlow.variable)}>
        <TypographyComponent variant="h1" className={styles.title}>
          Boost your building
        </TypographyComponent>

        <TypographyComponent variant="h1" className={styles.title}>
          process with
          <span className={styles.label}> Minimal</span>
        </TypographyComponent>

        <TypographyComponent variant="body1" className={styles.caption}>
          The starting point for your next project is based on MUI.
          <br />
          Easy customization helps you build apps faster and better.
        </TypographyComponent>

        <div className={styles["avatar-container"]}>
          <div className={styles.avatar}>
            <AvatarComponent
              src="/assets/avatars/avatar-2.webp"
              alt="Avatar2"
              size={2.1875}
            />

            <AvatarComponent
              src="/assets/avatars/avatar-3.webp"
              alt="Avatar3"
              size={2.1875}
            />
            <AvatarComponent
              src="/assets/avatars/avatar-1.webp"
              alt="Avatar1"
              size={2.1875}
            />
          </div>
          <TypographyComponent
            variant="subtitle2"
            className={styles["avatar-text"]}
          >
            160+ Happy customers
          </TypographyComponent>
        </div>

        <div className={styles["btn-container"]}>
          <ButtonComponent
            color="inherit"
            className={styles.preview}
            startIcon="flash-line"
          >
            <div>
              <TypographyComponent
                variant="button"
                color="inherit"
                className={styles["btn-font"]}
              >
                Live preview
              </TypographyComponent>
              <TypographyComponent
                variant="subtitle2"
                color="text-disabled"
                className={styles.version}
              >
                v7.2.0
              </TypographyComponent>
            </div>
          </ButtonComponent>
          <ButtonComponent
            color="inherit"
            className={styles.figma}
            startIcon="figma-line"
          >
            <TypographyComponent
              variant="button"
              color="text-primary"
              className={styles["btn-font"]}
            >
              Figma preview
            </TypographyComponent>
          </ButtonComponent>
        </div>

        <div className={styles.link}>
          <Link href="/" className="body2">
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
          <Image
            src="/assets/logo/javascript.svg"
            alt="js"
            width={30}
            height={30}
          />
          <Image
            src="/assets/logo/typescript.svg"
            alt="ts"
            width={30}
            height={30}
          />
          <Image
            src="/assets/logo/next.svg"
            alt="next"
            width={27}
            height={27}
          />
          <Image
            src="/assets/logo/vite.svg"
            alt="vite"
            width={27}
            height={27}
          />
        </div>
      </div>
    </>
  );
}
