import { atom } from 'recoil';

export interface Iintroduce {
  name: string;
  roll: string;
  say: string;
  url: string;
}

export const introduce = atom<Iintroduce[]>({
  key: 'introduce',
  default: [
    {
      name: 'Seo Seoung Jun',
      roll: 'Front-end',
      say: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,',
      url: 'seoungjun.png',
    },
    {
      name: 'Lee Sa Bine',
      roll: 'AI',
      say: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,',
      url: 'sabin.png',
    },
    {
      name: 'Choi Seung Hoon',
      roll: 'Back-end',
      say: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,',
      url: 'sunghoon.png',
    },
  ],
});
