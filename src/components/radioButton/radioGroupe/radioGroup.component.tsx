"use client";

import React, { Children, createContext, PropsWithChildren, ReactElement } from "react";

type contextProps = {
  value: string;
  onChange: (value : string) =>void
}

export const MyContext = createContext<contextProps>(null)

type Props = PropsWithChildren<{
  value : string;
  onChange : (value : string) => void
} >


export default function RadioGroupComponent({children, value, onChange}:Props): ReactElement {
  return (
    <MyContext.Provider value={{value, onChange}} >
      {children}
    </MyContext.Provider>
  )

}
