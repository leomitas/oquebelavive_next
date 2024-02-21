export interface IProduct {
  id: number
  name: string
  description: string
  image: string
  price: number
  sold: number
  linkForSale: string
}

export const products = [
  {
    id: 1,
    name: 'Atividade diagnóstica de matemática do 1º ao 5º ano',
    description: 'Atividade diagnóstica de matemática do 1º ao 5º ano',
    image: 'https://i.postimg.cc/VvJH2M4M/pdfisa.png',
    price: 7.9,
    sold: 0,
    linkForSale: 'https://mpago.la/1fKFr6K',
  },
  {
    id: 2,
    name: 'Calendário de 2024 para colocar em sala de aula',
    description: 'Calendário de 2024 para colocar em sala de aula',
    image: 'https://i.postimg.cc/YSTtzfQB/pdfisa1.png',
    price: 0,
    sold: 0,
    linkForSale:
      'https://drive.google.com/file/d/1DF3kQUiFq48XZz9sJInYJ9hVPMiEJbLg/view?usp=sharing',
  },
  {
    id: 3,
    name: 'Reta numérica e Números para sala de aula',
    description: 'Reta numérica e Números para colocar em sala de aula',
    image: 'https://i.postimg.cc/xCwLhQFM/reta-numerica-3.png',
    price: 0,
    sold: 0,
    linkForSale:
      'https://drive.google.com/file/d/1XP566BvzCxs5ich-daApXCStbjacTUU_/view?usp=sharing',
  },
]
