'use client'
import React, { ReactElement, useState } from 'react';
import clsx from 'clsx';

import styles from './text-field.module.css';

//'برای کترلد--------------------------------------------

// type Props = {
//   value : string;
//   onChange : (e: React.ChangeEvent<HTMLInputElement>) => void;
// }
// ---------------------------------------------------------


export default function TextFieldComponent(): ReactElement {

  const [value,setValue] = useState<string>('')



  const handleValue = (e:React.ChangeEvent<HTMLInputElement>)=>{
    (setValue(e.target.value))
  }


  return (
    <div className={clsx(styles.wrapper)}>


      <div className={clsx(styles.outlinedInput)}>
        <label
          className={clsx(
            styles.label)}
        >
          Label
        </label>
        <input
          className={clsx(styles.input)}
          // onFocus={}
          // onBlur={handleDeactive}
          value={value}
          onChange={handleValue}
          // {...otherProps}
        />

        <fieldset className={styles.fieldset}>
          <legend className={styles.legend}>
            <span></span>
          </legend>
        </fieldset>
      </div>
    </div>
  );
}
