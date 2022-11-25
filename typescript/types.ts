import { ReactNode } from "react";

export type User = {
  id: number
  name: string
}

export type HeaderProps = {
  selectedPage?: string;
};

export type LayoutProps = {
  children?: ReactNode;
  title?: string;
  selectedPage?: string;
  hide?: boolean;
};

export type dataModel = {
  name: string;
  email: string;
  bornDate: string;
  github?: string;
  linkedin?: string;
  skills: string;
  why: string;
  about: string;
};

export type adminModel = {
  email: string;
  token: string;
};