import image_poster from "../../../../access/KungFuPanda3.jpg";
import image_poster2 from "../../../../access/PoorThings.jpg";

export interface ItemsProps {
  adult: boolean;
  backdrop_path: string;
  id: number;
  title: string;
  original_language: string;
  original_title: string;
  name: string;
  overview: string;
  poster_path: string;
  media_type: string;
  genre_ids: number[];
  popularity: number;
  release_date: string;
  video: boolean;
  vote_average: number;
  first_air_date: string;
}
