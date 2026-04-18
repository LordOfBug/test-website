export interface NavItem {
  label: string;
  href: string;
}

export interface Service {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

export interface ContactFormData {
  fullName: string;
  email: string;
  message: string;
}
