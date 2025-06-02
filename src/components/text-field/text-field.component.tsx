'use client'
import React, { ReactElement } from 'react';
import clsx from 'clsx';

import styles from './text-field.module.css';

export default function TextFieldComponent(): ReactElement {


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
          // onBlur={}
          // value={}
          // onChange={}
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
