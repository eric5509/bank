"use client";
import { Provider } from "react-redux";
import React, { ReactNode } from "react";
import { store } from "../store/Store";

type Props = {
  children: ReactNode;
};

export default function AppProvider({ children }: Props) {
  return <Provider store={store}>{children}</Provider>;
}
