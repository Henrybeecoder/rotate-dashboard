export interface ListItem {
  id: string;
  title: string;
  paragraph: string;
  completed: boolean;
}

export interface ExtraListProps {
  extraListData: ListItem[];
  isDark: boolean;
}

export interface DashboardSectionProp {
  isDark: boolean,
  assetTableData: any[];
}

export interface ExtraListItem {
  id: string;
  title: string;
  paragraph: string;
  completed: boolean;
}

export interface TableColumn {
  key: string;
  header: string;
  width?: string;
}

export interface TableData {
  [key: string]: any;
}

export interface PaginationInfo {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  itemsPerPage: number;
}

export interface DropdownItem {
  id: string;
  title: string;
  server_name: string;
  text: string;
  image: string;
}

export interface DropdownProps {
  data: DropdownItem[];
  isDark?: boolean;
}

export interface DashboardItemProps {
  imageSrc: string;
  altText: string;
  label: string;
  tooltipContent: React.ReactNode;
  ip?: string;
  tooltipPosition?: {
    top?: string;
    left?: string;
    right?: string;
    bottom?: string;
  };
}

export interface DashboardInfoProps {
  isDark: boolean;
}
