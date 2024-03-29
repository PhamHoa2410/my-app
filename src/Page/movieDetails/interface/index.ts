export interface MovieDetailProps {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection?: any;
  budget: number;
  genres: Genre[];
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: Productioncompany[];
  production_countries: Productioncountry[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: Spokenlanguage[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}
export interface Spokenlanguage {
  english_name: string;
  iso_639_1: string;
  name: string;
}
export interface Productioncountry {
  iso_3166_1: string;
  name: string;
}
export interface Productioncompany {
  id: number;
  logo_path?: string;
  name: string;
  origin_country: string;
}
export interface Genre {
  id: number;
  name: string;
}

export interface CastProps {
  id: number;
  cast: Cast[];
}
interface Cast {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string;
  cast_id: number;
  character: string;
  credit_id: string;
  order: number;
}
