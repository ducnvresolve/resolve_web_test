export interface IContent {
  id: string;
  title: string;
  title_vn: string;
  desc: string;
  desc_vn: string;
  bullets: IBullet[];
  img?: string[] | string[][];
}

export interface IBullet {
  title: string;
  title_vn: string;
  desc: string;
  desc_vn: string;
  img?: string[] | string[][];
  id?: string;
}
