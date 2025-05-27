
import { Color, Size } from '@/types/radioButton.type';
import styles from './radio.module.css'
import clsx from 'clsx';
import { ReactElement } from 'react';

type props = {
    size: Size;
    color: Color;
}

export default function RadioComponent ({size,color}:props): ReactElement {
    return(
        <input type="radio" className={clsx(size,color)}/>
    )
}