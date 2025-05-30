"use client";

import { ReactElement, useContext, useState } from "react";

import clsx from "clsx";

import styles from "./radio.module.css";
import { MyContext } from "../radioGroupe/radioGroup.component";

export type Placement = 'start' | 'end' | 'top' | 'bottom'

export type Size = "normal" | "small";

export type Color =
  | "primary"
  | "secondary"
  | "info"
  | "success"
  | "warning"
  | "error"
  | "Disabled";

type Props = {
  color?: Color;
  size?: Size;
  checked?: boolean;
  disabled?: boolean;
  className?: string;
  label?: string;
  placement?: Placement;
  value: string
};

export default function RadioComponent({
  color,
  size = "normal",
  className,
  disabled,
  checked,
  label,
  placement='start',
  value
}: Props): ReactElement {

  const {value, onChange ,children} = useContext(MyContext)

  const [childValue,setChildValue] = useState(null)
  const handleOnChange = (e) => setValue(e.target.value)

  const hasradioGroupe = MyContext ? MyContext.value : childValue;

  // ------------------------------------------------------------------------------------------

  type pulse = {x:number,y:number,id:number}
  
  const [pulse, setPulse] = useState<pulse[]>([]);

  const activePulse = (e: React.MouseEvent<HTMLInputElement>) => {
    const locationItem = e.currentTarget.getBoundingClientRect()

    const x = locationItem.width / 2;
    const y = locationItem.height / 2;

    let id=Date.now()
    const newPulse:pulse = {x,y,id}

    setPulse((prev)=>[...prev, newPulse])

    setTimeout(() => {
      setPulse((prev)=>prev.filter((prevPulse)=>prevPulse.id !== id))
    }, 600);
  }

// ------------------------------------------------------------------------------------------------  

  return (
    <div className={clsx(styles.radioWrapper, disabled && styles.disabled,styles[placement])}>
      <label>{label}</label>

      <div className={styles.radioContainer}>
        {pulse.map((pulse) => (
          <span
            key={pulse.id}
            className={clsx(styles.pulse)}
        ></span>
         ))}

        <input

         value={value}
         onChange={handleOnChange}
          type="radio"
          className={clsx(
            styles.radio,
            className,
            styles[color],
            styles[size],
          )}
          checked={checked}
          disabled={disabled}
          onMouseDown={activePulse}
        />
      </div>

    </div>
  );
}
