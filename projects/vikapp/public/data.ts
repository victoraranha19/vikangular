import { INavbarContents } from '../../viklib/src/public-api';

export const navbarAPI: INavbarContents[] = [
  {
    label: 'Home',
    menu: [{ label: 'Home1' }, { label: 'Home2' }, { label: 'Home3' }],
  },
  {
    label: 'Financeiro',
    menu: [
      { label: 'Financeiro1' },
      { label: 'Financeiro2' },
      { label: 'Financeiro3' },
    ],
  },
  {
    label: 'Jogo da velha',
    menu: [
      { label: 'Jogo da velha1' },
      { label: 'Jogo da velha2' },
      { label: 'Jogo da velha3' },
    ],
  },
];
