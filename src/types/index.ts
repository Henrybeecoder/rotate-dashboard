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

export interface HomeClientProps {
  contentAreaStyles: string;
  DescriptionComponent: React.ComponentType<{ extraListData: ExtraListItem[] }>;
  DashboardComponent: React.ComponentType;
}