export interface NavItem {
  label: string;
  id: number;
  path: string;
  items?: NavItem[];
  isChart?: boolean;
}
