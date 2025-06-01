'use client'

import React, { ReactElement } from 'react';
import clsx from 'clsx';

import styles from './text-field.module.css';

export default function TextFieldComponent(): ReactElement {

  return (
    <div className={clsx(styles.wrapper)}>
      <label>label</label>
      <div>
        <fieldset>
          <input type="text" />
          <legend>
            <span>fieldset label</span>
          </legend>
        </fieldset>
      </div>
      
    </div>
  );
}
