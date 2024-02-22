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
    description:
      'Avaliação Diagnóstica de Matemática para os Anos Iniciais do Ensino Fundamental.. Nesse aquivo você vai ter acesso a 5 modelos de avaliação diagnóstica de matemática, segundo as habilidades da BNCC.. As avaliações são para o 1°, 2°, 3°, 4° e 5° ano do ensino fundamental, e as habilidades da BNCC são do ano anterior, ou seja, a avaliação do 2° ano contempla habilidades do 1° ano, pois espera-se que o aluno chegue ao 2° ano sabendo o conteúdo do 1°.. O arquivo tem 15 páginas, e as avaliações variam entre 2 a 4 páginas cada uma.',
    image: 'https://i.postimg.cc/VvJH2M4M/pdfisa.png',
    price: 7.9,
    sold: 0,
    linkForSale: 'https://mpago.la/1rVMtm5',
  },
  {
    id: 2,
    name: 'Ficha individual - nome, alfabeto, numerais e tabuada',
    description:
      'Ficha de apoio para os alunos.. Nesse arquivo você vai ter acesso a dois modelos de fichas de apoio para os alunos em diferentes temas (que podem ser impressas e plastificadas para durar o ano inteiro).. No primeiro modelo tem lugar escrever o nome do aluno, alfabeto em letra de imprensa maiuscula e um quadro numérico do 1 ao 100.. Já no segundo modelo também tem lugar para escrever o nome do aluno, alfabeto nos diferentes tipos de letra (de imprensa e cursiva, tanto maiuscula como minuscula) e uma tabuada do 1 ao 10.. Os temas disponíveis no arquivo são: dinossauro, cachorrinho, material escolar e ursinho.. O arquivo tem 8 páginas.',
    image: 'https://i.postimg.cc/PqW5BTgn/ficha-individual1.jpg',
    price: 4.9,
    sold: 0,
    linkForSale: 'https://mpago.la/1fKFr6K',
  },
  {
    id: 3,
    name: 'Calendário de 2024 para colocar em sala de aula',
    description: 'Calendário de 2024 para colocar em sala de aula',
    image: 'https://i.postimg.cc/YSTtzfQB/pdfisa1.png',
    price: 0,
    sold: 0,
    linkForSale:
      'https://drive.google.com/file/d/1DF3kQUiFq48XZz9sJInYJ9hVPMiEJbLg/view?usp=sharing',
  },
  {
    id: 4,
    name: 'Reta numérica e Números para sala de aula',
    description: 'Reta numérica e Números para colocar em sala de aula',
    image: 'https://i.postimg.cc/xCwLhQFM/reta-numerica-3.png',
    price: 0,
    sold: 0,
    linkForSale:
      'https://drive.google.com/file/d/1XP566BvzCxs5ich-daApXCStbjacTUU_/view?usp=sharing',
  },
]
