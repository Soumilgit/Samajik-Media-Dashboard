import { useEffect, useState } from 'react';

export default function CodeChefCardProblems() {
  const [problems, setProblems] = useState(null);

  useEffect(() => {
    const fetchProblems = async () => {
      const response = await fetch('/api/codechef');
      const data = await response.json();
      setProblems(data.problems);
    };
    fetchProblems();
  }, []);

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Problems Solved</h5>
        <p className="card-text">{problems !== null ? problems : 'Loading...'}</p>
      </div>
    </div>
  );
}
