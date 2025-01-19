import { useEffect, useState } from 'react';

export default function LeetCodeCardContests() {
  const [contests, setContests] = useState(null);

  useEffect(() => {
    const fetchContests = async () => {
      const response = await fetch('/api/leetcode');
      const data = await response.json();
      setContests(data.contests);
    };
    fetchContests();
  }, []);

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Contests Participated</h5>
        <p className="card-text">{contests !== null ? contests : 'Loading...'}</p>
      </div>
    </div>
  );
}
