import PlaceImage from "./PlaceImage";

export default function Place({ place }) {
  return (
    <li>
      <PlaceImage place={place} />
      <p>
        <b>{place.name}</b>: {place.description}
      </p>
    </li>
  );
}
