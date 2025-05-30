"use client";

import React, { createContext, PropsWithChildren, ReactElement } from "react";

export const MyContext = createContext(null);

type props = PropsWithChildren<{
  value:string;
  onChange:(value : string) => void
}>;

export default function RadioGroupComponent({value,onChange, children}: props): ReactElement {
  return (
    <MyContext.Provider value={{value,onChange}}>
      {children}
    </MyContext.Provider>
  )

}
