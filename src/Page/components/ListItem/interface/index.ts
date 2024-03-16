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

export const fakeItems = {
  adult: false,
  backdrop_path: "/gJL5kp5FMopB2sN4WZYnNT5uO0u.jpg",
  genre_ids: [28, 12, 16, 35, 10751],
  id: 1011985,
  original_language: "en",
  original_title: "Kung Fu Panda 4",
  overview:
    "Po is gearing up to become the spiritual leader of his Valley of Peace, but also needs someone to take his place as Dragon Warrior. As such, he will train a new kung fu practitioner for the spot and will encounter a villain called the Chameleon who conjures villains from the past.",
  popularity: 1728.914,
  poster_path: image_poster,
  release_date: "2024-03-02",
  title: "Kung Fu Panda 4",
  video: false,
  vote_average: 7,
  vote_count: 109,
};
