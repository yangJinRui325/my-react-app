export interface IItem {
  id: string,
  content: string
}

export interface IAppState {
  items: IItem[];
  selected: IItem[];
}

export interface IMoveResult {
  appletUnit: IItem[];
  appletPage: IItem[];
}
