import { useEffect, useState } from "react";
export default function TopAnime() {
  const [animes, setAnimes] = useState([]);
  const [page, setPage] = useState(1);
  const URL = `https://api.jikan.moe/v4/top/anime?page=${page}`;

  useEffect(() => {
    callData();
  }, [page]);

  async function callData() {
    const JSONdata = await fetch(URL);
    const resultData = await JSONdata.json();
    setAnimes(resultData.data);
    console.log(resultData);
  }

  return (
    <div>
      <h1>Day 38 - Top Anime</h1>
      <button onClick={() => setPage(page + 1)}> Next page</button>

      {animes &&
        animes.map((anime, index) => {
          return <h6 key={index}>{anime.title}</h6>;
        })}
      {/* <button onClick={callData}>Fetch Top Anime</button> */}
    </div>
  );
}
