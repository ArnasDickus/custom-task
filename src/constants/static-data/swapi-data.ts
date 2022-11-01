export const swapiDataHeaders = {
  Authorization: `Bearer ${process.env.NEXT_PUBLIC_SWAPI_URL}`,
  "Content-Type": "application/json",
  Accept: "application/json",
};

export interface ISwapiMovies {
  title: string;
  characters: string[];
  created: string;
  director: string;
  edited: string;
  episode_id: number;
  opening_crawl: string;
  planets: string[];
  producer: string;
  release_data: string;
  species: string[];
  starships: string[];
  url: string;
  vehicles: string[];
}

export interface ISwapiCharacters {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  birth_year: string;
  created: Date;
  edited: Date;
  eye_color: string;
  films: string[];
  gender: string;
  homeworld: string;
  skin_color: string;
  species: string[];
  starships: string[];
  url: string;
  vehicles: string[];
}
