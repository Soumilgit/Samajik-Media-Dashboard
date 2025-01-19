import { useEffect, useState } from 'react';

export default function LeetCodeCardRanking() {
  const [ranking, setRanking] = useState(null);

  useEffect(() => {
    const fetchRanking = async () => {
      const response = await fetch('/api/leetcode');
      const data = await response.json();
      setRanking(data.ranking);
    };
    fetchRanking();
  }, []);

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Global Ranking</h5>
        <p className="card-text">{ranking !== null ? ranking : 'Loading...'}</p>
      </div>
    </div>
  );
}
