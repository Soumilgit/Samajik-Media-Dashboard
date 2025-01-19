import { useEffect, useState } from 'react';

export default function LeetCodeCardSolved() {
  const [problemsSolved, setProblemsSolved] = useState(null);

  useEffect(() => {
    const fetchProblemsSolved = async () => {
      const response = await fetch('/api/leetcode');
      const data = await response.json();
      setProblemsSolved(data.problemsSolved);
    };
    fetchProblemsSolved();
  }, []);

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Problems Solved</h5>
        <p className="card-text">{problemsSolved !== null ? problemsSolved : 'Loading...'}</p>
      </div>
    </div>
  );
}
