export interface Film{
  title: string;
  year: number;
  affiche:string;
  entree:number;
  rating: number;
  director: string;
  actors:string[]
}
export const Films:Film[] = [
  {
    title: 'Top Gun',
    year:1986,
    affiche:"topgun.jpg",
    entree: 3570719,
    rating: 3,
    director:'Tony Scott',
    actors : ['Tom Cruise', 'Kelly McGillis', 'Val Kilmer', 'Anthony Edwards', 'Tom Skerritt']
  },
  {
    title: 'The Dark Knight Rises',
    year: 2012,
    affiche:"td.jpg",
    entree: 4385032,
    rating: 4.5,
    director: 'Christoper Nolan',
    actors: ['Christian Bale', 'Michael Caine', 'Gary Oldman', 'Marion Cotillard', 'Joseph Gordon-Levitt']
  },
  {
    title: 'Inception',
    year: 2010,
    affiche:"inception.jpg",
    entree: 4925927,
    rating: 4.5,
    director: 'Christoper Nolan',
    actors: ['Leonardo DiCaprio', 'Ellen Page', 'Marion Cotillard', 'Joseph Gordon-Levitt']
  },
  {
    title: 'Child 44',
    year: 2015,
    affiche:"child44.jpg",
    entree: 3570719,
    rating: 3,
    director: 'Daniel Espinosa',
    actors: ['Tom hardy', 'Noomi Rapace', 'Gary Oldman','Vincent Cassel']
  },
  {
    title: 'Les Tuches',
    year: 2021,
    affiche:"tuche.jpg",
    entree: 754477,
    rating: 2,
    director: 'Olivier Baroux',
    actors: ['Jean-Paul Rouve', 'Isabelle Nanty', 'Michel Blanc','Claire Nadeau']
  }
];


