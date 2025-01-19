import { useEffect, useState } from 'react';

export default function LinkedInCardComments() {
  const [comments, setComments] = useState(null);

  useEffect(() => {
    const fetchComments = async () => {
      const response = await fetch('/api/linkedin');
      const data = await response.json();
      setComments(data.comments);
    };
    fetchComments();
  }, []);

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">LinkedIn Comments</h5>
        <p className="card-text">{comments !== null ? comments : 'Loading...'}</p>
      </div>
    </div>
  );
}
