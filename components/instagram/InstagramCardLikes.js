import { useEffect, useState } from 'react';

export default function InstagramCardLikes() {
  const [likes, setLikes] = useState(null);

  useEffect(() => {
    const fetchLikes = async () => {
      const response = await fetch('/api/instagram');
      const data = await response.json();
      setLikes(data.likes);
    };
    fetchLikes();
  }, []);

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Instagram Likes</h5>
        <p className="card-text">{likes !== null ? likes : 'Loading...'}</p>
      </div>
    </div>
  );
}
