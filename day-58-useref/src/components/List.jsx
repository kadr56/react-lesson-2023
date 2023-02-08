import Place from "./Place";
import { places } from "../data/data";
export default function List({ imageSize }) {
  return places.map((place, index) => <Place place={place} key={index} />);
}
