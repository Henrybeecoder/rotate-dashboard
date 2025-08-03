export interface ListItem {
  id: string;
  title: string;
  paragraph: string;
  completed: boolean;
}

export interface ExtraListProps {
  extraListData: ListItem[];
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