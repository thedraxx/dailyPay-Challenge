// Generated by https://quicktype.io

export interface Inominiees {
  data: Datum[];
}

export interface Datum {
  id: string;
  items: Item[];
  title: string;
}

export interface Item {
  title: string;
  photoUrL: string;
  id: string;
}
