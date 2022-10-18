// You can include shared interfaces/types in a separate file
// and then use them in any component by importing them. For
// example, to import the interface below do:
//
// import { User } from 'path/to/interfaces';

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

export interface FooterProps {
  hide: boolean;
}

export interface UserProps {
  id: string;
  name: string;
}

export interface CardProps {
  title: string;
  desc?: string;
  link?: string;
}