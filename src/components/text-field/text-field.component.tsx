'use client'
import React, { ReactElement, useState } from 'react';
import clsx from 'clsx';

import styles from './text-field.module.css';

//'برای آن کترلد--------------------------------------------

// type Props = {
//   value : string;
//   onChange : (e: React.ChangeEvent<HTMLInputElement>) => void;
// }
// ---------------------------------------------------------





export default function TextFieldComponent(): ReactElement {

  // const [value,setValue] = useState<string>('')
  const [isActive,setIsActive] = useState<boolean>(false)


  // const handleChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
  //   (setValue(e.target.value))
  // }

  const handleFocus = () => setIsActive(true)
  const handleBlur = () => setIsActive(false)


  return (
    <div className={clsx(styles.wrapper)}>

      <div className={clsx(styles.outlinedInput)}>
        <label
          className={clsx(
            styles.label, (isActive && styles.labelFocus))}
        >
          Labeldfzgh
        </label>
        <input
          className={clsx(styles.input)}
          onFocus={handleFocus}
          onBlur={handleBlur}
          value={value}
          // onChange={handleChange}
          // {...otherProps}
        />

        <fieldset className={clsx(styles.fieldset, (isActive && styles.fieldsetFocus))}>
          <legend className={styles.legend}>
            <span></span>
          </legend>
        </fieldset>
      </div>
    </div>
  );
}
