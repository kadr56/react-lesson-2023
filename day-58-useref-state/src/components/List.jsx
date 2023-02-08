import { places } from "../data/data";
import Place from "./Place";
export default function List({ imageSize }) {
  return places.map((place, index) => (
    <Place place={place} imageSize={imageSize} key={index} />
  ));
}
