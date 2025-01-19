import { useEffect, useState } from 'react';

export default function SpotifyCardTopTracks() {
  const [topTracks, setTopTracks] = useState([]);

  useEffect(() => {
    const fetchTopTracks = async () => {
      const response = await fetch('/api/spotify');
      const data = await response.json();
      setTopTracks(data.topTracks);
    };
    fetchTopTracks();
  }, []);

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Spotify Top Tracks</h5>
        <ul>
          {topTracks.length
            ? topTracks.map((track, index) => <li key={index}>{track}</li>)
            : 'Loading...'}
        </ul>
      </div>
    </div>
  );
}
