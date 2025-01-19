import { useEffect, useState } from 'react';

export default function SpotifyCardPlaylists() {
  const [playlists, setPlaylists] = useState([]);

  useEffect(() => {
    const fetchPlaylists = async () => {
      const response = await fetch('/api/spotify');
      const data = await response.json();
      setPlaylists(data.playlists);
    };
    fetchPlaylists();
  }, []);

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Spotify Playlists</h5>
        <ul>
          {playlists.length
            ? playlists.map((playlist, index) => <li key={index}>{playlist}</li>)
            : 'Loading...'}
        </ul>
      </div>
    </div>
  );
}
