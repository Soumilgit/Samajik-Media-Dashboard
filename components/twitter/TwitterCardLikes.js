import { useEffect, useState } from 'react';

export default function TwitterCardLikes() {
  const [likes, setLikes] = useState(null);

  useEffect(() => {
    const fetchLikes = async () => {
      const response = await fetch('/api/twitter');
      const data = await response.json();
      setLikes(data.likes);
    };
    fetchLikes();
  }, []);

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Total Likes</h5>
        <p className="card-text">{likes !== null ? likes : 'Loading...'}</p>
      </div>
    </div>
  );
}
