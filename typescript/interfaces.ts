export interface FooterProps {
  hide: boolean;
}

export interface UserProps {
  id: string;
  name: string;
}

export interface CardProps {
  title: string;
  description?: string;
  link?: string;
  imageUri?: string;
}

export interface SponsorsProps{
  title: string;
  image?: string;
}

export interface WorkshopsProps{
  title: string;
  image?: string;
}