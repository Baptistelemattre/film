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
    director:'Tony Scott',
    actors : ['Tom Cruise', 'Kelly McGillis', 'Val Kilmer', 'Anthony Edwards', 'Tom Skerritt']
  },
  {
    title: 'The Dark Knight Rises',
    year: 2012,
    director: 'Christoper Nolan',
    actors: ['Christian Bale', 'Michael Caine', 'Gary Oldman', 'Marion Cotillard', 'Joseph Gordon-Levitt']
  },
  {
    title: 'Inception',
    year: 2010,
    director: 'Christoper Nolan',
    actors: ['Leonardo DiCaprio', 'Ellen Page', 'Marion Cotillard', 'Joseph Gordon-Levitt']
  },
  {
    title: 'Child 44',
    year: 2015,
    director: 'Daniel Espinosa',
    actors: ['Tom hardy', 'Noomi Rapace', 'Gary Oldman','Vincent Cassel']
  }
];


