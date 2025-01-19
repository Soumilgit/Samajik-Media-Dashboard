import { useEffect, useState } from 'react';

export default function CodeChefCardRating() {
  const [rating, setRating] = useState(null);

  useEffect(() => {
    const fetchRating = async () => {
      const response = await fetch('/api/codechef');
      const data = await response.json();
      setRating(data.rating);
    };
    fetchRating();
  }, []);

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">CodeChef Rating</h5>
        <p className="card-text">{rating !== null ? rating : 'Loading...'}</p>
      </div>
    </div>
  );
}
