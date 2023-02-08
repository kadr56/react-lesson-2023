import PlaceImage from "./PlaceImage";

export default function Place({ place, imageSize }) {
  return (
    <li>
      <PlaceImage place={place} imageSize={imageSize} />
      <p>
        <b>{place.name}</b>: {place.description}
      </p>
    </li>
  );
}
