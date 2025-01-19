import { useEffect, useState } from 'react';

export default function InstagramCardFollowers() {
  const [followers, setFollowers] = useState(null);

  useEffect(() => {
    const fetchFollowers = async () => {
      const response = await fetch('/api/instagram');
      const data = await response.json();
      setFollowers(data.followers);
    };
    fetchFollowers();
  }, []);

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Instagram Followers</h5>
        <p className="card-text">{followers !== null ? followers : 'Loading...'}</p>
      </div>
    </div>
  );
}
