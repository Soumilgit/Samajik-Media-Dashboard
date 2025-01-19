import { useEffect, useState } from 'react';

export default function SpotifyCardFollowers() {
  const [followers, setFollowers] = useState(null);

  useEffect(() => {
    const fetchFollowers = async () => {
      const response = await fetch('/api/spotify');
      const data = await response.json();
      setFollowers(data.followers);
    };
    fetchFollowers();
  }, []);

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Spotify Followers</h5>
        <p className="card-text">{followers !== null ? followers : 'Loading...'}</p>
      </div>
    </div>
  );
}
