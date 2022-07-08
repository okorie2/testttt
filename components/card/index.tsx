import Image from "next/image";
import React from "react";
import { Container } from "./style";
interface Props {
  children: JSX.Element;
}
export default function Card({ children }: Props) {
  return <Container>{children}</Container>;
}
