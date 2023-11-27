type _Label = string | JSX.Element;

export type Label = { text?: _Label } | { children?: _Label } | { title?: _Label };

export interface INavButtonsID {
  search: string;
  backToSearch: string;
  share: string;
}
