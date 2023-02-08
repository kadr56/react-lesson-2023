import { useContext } from "react";
import { getImageUrl } from "../data/Utils";
import { PlaceContext } from "../contexts/PlaceContext";

export default function PlaceImage({ place }) {
  const [isLarge, setIsLarge, imageSize] = useContext(PlaceContext);
  return (
    <img
      src={getImageUrl(place)}
      alt={place.name}
      width={imageSize}
      height={imageSize}
    />
  );
}
