import { useEffect, useState } from 'react';

export default function LinkedInCardPosts() {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch('/api/linkedin');
      const data = await response.json();
      setPosts(data.posts);
    };
    fetchPosts();
  }, []);

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">LinkedIn Posts</h5>
        <p className="card-text">{posts !== null ? posts : 'Loading...'}</p>
      </div>
    </div>
  );
}
